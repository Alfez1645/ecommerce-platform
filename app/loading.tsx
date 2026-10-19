
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />

      <p className="animate-pulse text-sm font-medium text-gray-600">
        Loading, please wait...
      </p>
    </div>
  );
}
