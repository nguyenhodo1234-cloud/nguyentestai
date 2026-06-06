export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800 flex items-center justify-center">
          <span className="text-2xl">📄</span>
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-slate-400 mt-2">This page is under development.</p>
      </div>
    </div>
  );
}
