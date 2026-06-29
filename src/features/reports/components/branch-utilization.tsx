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

import { BranchUtilization } from "../types";

type Props = {
  data: BranchUtilization[];
};

export default function BranchUtilization({
  data,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>
          Branch-wise Inventory Utilization
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Consumption comparison across all branches.
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

              <XAxis dataKey="branch" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="coffee"
                name="Coffee"
                fill="#92400e"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="tea"
                name="Tea"
                fill="#16a34a"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="sugar"
                name="Sugar"
                fill="#f59e0b"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="paper"
                name="Printer Paper"
                fill="#2563eb"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}