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
  ResponsiveContainer,
 Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { RequestedItem } from "../types";

type Props = {
  data: RequestedItem[];
};

export default function TopRequestedItems({
  data,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>
          Top Requested Inventory
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Most frequently requested inventory items across all branches.
        </p>
      </CardHeader>

      <CardContent>
        <div className="h-[360px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                left: 20,
                right: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis type="number" />

              <YAxis
                type="category"
                dataKey="item"
                width={120}
              />

              <Tooltip />

              <Bar
                dataKey="quantity"
                name="Requested Qty"
                fill="#2563eb"
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}