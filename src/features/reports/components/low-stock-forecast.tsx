"use client";

import {
  AlertTriangle,
  Clock3,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Forecast } from "../types";

type Props = {
  data: Forecast[];
};

export default function LowStockForecast({
  data,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>
          Low Stock Forecast
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Inventory items expected to require replenishment soon.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {data.map((item) => (
          <div
            key={item.item}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />

                <p className="font-medium">
                  {item.item}
                </p>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Remaining Stock:{" "}
                <span className="font-medium">
                  {item.stock}
                </span>
              </p>
            </div>

            <div className="text-right">
              <Badge
                variant={
                  item.remainingDays <= 7
                    ? "destructive"
                    : "secondary"
                }
              >
                <Clock3 className="mr-1 h-3 w-3" />
                {item.remainingDays} days
              </Badge>
            </div>
          </div>
        ))}

        {!data.length && (
          <div className="py-12 text-center text-muted-foreground">
            No low stock items 🎉
          </div>
        )}
      </CardContent>
    </Card>
  );
}