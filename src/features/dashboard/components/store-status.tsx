import {
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

const stores = [
  {
    name: "Head Office",
    manager: "Rohit Sharma",
    status: "Open",
  },
  {
    name: "Gandhi Nagar",
    manager: "Amit Gupta",
    status: "Open",
  },
  {
    name: "Janipur",
    manager: "Priya Singh",
    status: "Open",
  },
  {
    name: "Udhampur",
    manager: "Rahul Verma",
    status: "Opening Soon",
  },
  {
    name: "Lakhdta Bazaar",
    manager: "Sneha Kapoor",
    status: "Open",
  },
  {
    name: "Akhnoor",
    manager: "Mohit Sharma",
    status: "Open",
  },
  {
    name: "Kathua",
    manager: "Ritika Gupta",
    status: "Open",
  },
];

export default function StoreStatus() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Store Status
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Live operational overview
          </p>
        </div>

        <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          7 Stores
        </div>
      </div>

      <div className="space-y-3">
        {stores.map((store) => (
          <div
            key={store.name}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                <MapPin className="h-5 w-5 text-slate-600" />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  {store.name}
                </p>

                <p className="text-sm text-slate-500">
                  {store.manager}
                </p>
              </div>
            </div>

            {store.status === "Open" ? (
              <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                Open
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-700">
                <Clock3 className="h-4 w-4" />
                Opening Soon
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}