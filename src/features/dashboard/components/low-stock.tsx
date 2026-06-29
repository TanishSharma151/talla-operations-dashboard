import {
  AlertTriangle,
  ArrowRight,
  Package,
} from "lucide-react";

const products = [
  {
    name: "22K Gold Ring",
    sku: "GR-1021",
    stock: 2,
    threshold: 5,
  },
  {
    name: "Diamond Pendant",
    sku: "DP-4412",
    stock: 1,
    threshold: 3,
  },
  {
    name: "Silver Anklet",
    sku: "SA-1108",
    stock: 4,
    threshold: 8,
  },
  {
    name: "Platinum Chain",
    sku: "PC-5532",
    stock: 2,
    threshold: 4,
  },
];

export default function LowStock() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Inventory Alerts
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Products requiring attention
          </p>
        </div>

        <div className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
          {products.length} Alerts
        </div>
      </div>

      <div className="space-y-3">
        {products.map((item) => (
          <div
            key={item.sku}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:border-red-200 hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                <Package className="h-5 w-5 text-red-600" />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  {item.name}
                </p>

                <p className="text-sm text-slate-500">
                  SKU: {item.sku}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-slate-500">
                  Remaining
                </p>

                <p className="font-bold text-red-600">
                  {item.stock}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-500">
                  Threshold
                </p>

                <p className="font-semibold">
                  {item.threshold}
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100">
                <AlertTriangle className="h-4 w-4" />
                Reorder
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}