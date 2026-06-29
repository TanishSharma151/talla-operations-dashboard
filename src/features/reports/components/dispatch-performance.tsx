"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DispatchPerformance } from "../types";

type Props = {
  data: DispatchPerformance[];
};

export default function DispatchPerformance({
  data,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>
          Dispatch Performance
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Monthly comparison of dispatched and delivered shipments.
        </p>
      </CardHeader>

      <CardContent>
        <div className="h-[360px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="dispatched"
                name="Dispatched"
                fill="#2563eb"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="delivered"
                name="Delivered"
                fill="#16a34a"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}