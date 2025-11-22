'use client';
export default function StickyCtaBar() {
  return (
    <div className="hidden md:block fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 text-center z-40">
      <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors">
        Get Started
      </button>
    </div>
  );
}
