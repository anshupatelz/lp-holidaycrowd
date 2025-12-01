'use client';

import { ArrowRight } from 'lucide-react';

interface StickyCtaButtonProps {
    onClick: () => void;
}

export default function StickyCtaButton({ onClick }: StickyCtaButtonProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
            {/* Blurred background with gradient */}
            <div className="backdrop-blur-xl bg-gradient-to-t from-white/80 via-white/60 to-transparent p-4 pb-6 rounded-t-[50px]">
                <button
                    onClick={onClick}
                    className="bg-white text-primary px-12 py-2 rounded-full font-medium text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl border border-gray-200 flex items-center justify-center gap-2 group mx-auto"
                >
                    <span>Plan a Trip for me</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
}
