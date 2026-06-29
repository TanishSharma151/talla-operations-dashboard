export default function TopTabs() {
  return (
    <div className="flex gap-2 rounded-xl border bg-white p-1 w-fit">
      <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow">
        Gen. Maintenance Reminder
      </button>

      <button className="rounded-lg px-4 py-2 text-sm text-slate-500">
        Store Checklists
      </button>
    </div>
  );
}