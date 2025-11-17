import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        const requestId = `HC-${Date.now()}`;

        // Build the URL with query parameters
        const params = new URLSearchParams({
            name: formData.fullName,
            phone_number: `+91${formData.phoneNumber}`,
            email: formData.emailAddress,
            start_date: formData.tripDate,
            no_of_days: formData.days,
            no_of_adults: formData.adults,
            no_of_children: formData.children,
            no_of_infant: formData.infants,
            destination: formData.destination,
            Hotelcategory: formData.hotelCategory,
            'flexibleDate?': formData.flexibleDate ? 'Yes' : 'No',
            'whatsapp?': formData.whatsappUpdates ? 'Yes' : 'No',
            Triptheme: formData.tripTheme,
            "Guest'slocation": formData.location,
            client_request_uid: requestId,
        });

        // Add UTM parameters and page URL if present
        if (formData.utm_source) params.append('utm_source', formData.utm_source);
        if (formData.utm_campaign) params.append('utm_campaign', formData.utm_campaign);
        if (formData.utm_adgroup) params.append('utm_adgroup', formData.utm_adgroup);
        if (formData.utm_ad) params.append('utm_ad', formData.utm_ad);
        if (formData.utm_keyword) params.append('utm_keyword', formData.utm_keyword);
        if (formData.page_url) params.append('comments', `Page URL: ${formData.page_url}`);

        // If there are UTM params, also add them to comments for better visibility
        if (formData.utm_source || formData.utm_campaign) {
            const utmInfo = [
                formData.utm_source && `Source: ${formData.utm_source}`,
                formData.utm_campaign && `Campaign: ${formData.utm_campaign}`,
                formData.utm_adgroup && `Ad Group: ${formData.utm_adgroup}`,
                formData.utm_ad && `Ad: ${formData.utm_ad}`,
                formData.utm_keyword && `Keyword: ${formData.utm_keyword}`,
            ].filter(Boolean).join(' | ');

            const existingComments = params.get('comments') || '';
            params.set('comments', existingComments ? `${existingComments} | ${utmInfo}` : utmInfo);
        }

        const sembarkUrl = `https://api.sembark.com/integrations/v1/trip-plan-requests?${params.toString()}`;

        const response = await fetch(sembarkUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 540|322bbLy0a6LYOEARcsM8z8mSCQ53qq6oZwcZCuUZ72b9651f',
            },
        });

        const result = await response.json();
        console.log('CRM Response:', result);

        if (response.ok) {
            return NextResponse.json({
                success: true,
                message: 'Trip request submitted successfully',
                data: result,
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to submit trip request',
                error: result,
            }, { status: response.status });
        }
    } catch (error) {
        console.error('Error submitting to CRM:', error);
        return NextResponse.json({
            success: false,
            message: 'Error submitting form. Please try again.',
        }, { status: 500 });
    }
}
