const stores = [
  "All Stores (HO)",
  "Head Office",
  "Gandhi Nagar",
  "Janipur",
  "Udhampur",
  "Lakhdta Bazaar",
  "Akhnoor",
  "Kathua",
];

export default function StoreFilter() {
  return (
    <div className="flex flex-wrap gap-2">
      {stores.map((store, index) => (
        <button
          key={store}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            index === 0
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-white hover:bg-slate-100"
          }`}
        >
          {store}
        </button>
      ))}
    </div>
  );
}