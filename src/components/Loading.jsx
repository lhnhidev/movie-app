export default function Loading({ text }) {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center sm:h-[600px]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-800 border-t-slate-300"></div>
      <p className="mt-2">{text}</p>
    </div>
  );
}
