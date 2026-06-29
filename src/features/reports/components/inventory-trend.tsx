"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { InventoryTrend } from "../types";

type Props = {
  data: InventoryTrend[];
};

export default function InventoryTrend({
  data,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>
          Inventory Activity Trend
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Monthly requests, dispatches and consumption.
        </p>
      </CardHeader>

      <CardContent>
        <div className="h-[360px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="requests"
                name="Requests"
                stroke="#2563eb"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="dispatched"
                name="Dispatched"
                stroke="#16a34a"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="consumed"
                name="Consumed"
                stroke="#ea580c"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}