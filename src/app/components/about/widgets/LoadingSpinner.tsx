export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
          Loading...
        </div>
      </div>
    </div>
  );
}
