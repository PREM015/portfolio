'use client';
export default function PrintVersion() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed right-4 top-20 w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 z-50"
      aria-label="Print this page"
    >
      🖨️
    </button>
  );
}
