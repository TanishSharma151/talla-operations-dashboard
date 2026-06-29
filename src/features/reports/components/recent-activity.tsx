"use client";

import {
  Activity as ActivityIcon,
  ArrowRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Activity } from "../types";

type Props = {
  data: Activity[];
};

export default function RecentActivity({
  data,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>
          Recent Activity
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Latest inventory operations across all branches.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {data.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 rounded-xl border p-4 transition-colors hover:bg-slate-50"
          >
            <div className="rounded-full bg-blue-100 p-2">
              <ActivityIcon className="h-4 w-4 text-blue-600" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium">
                  {activity.title}
                </p>

                <ArrowRight className="h-3 w-3 text-slate-400" />

                <span className="text-sm text-muted-foreground">
                  {activity.branch}
                </span>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                {activity.time}
              </p>
            </div>
          </div>
        ))}

        {!data.length && (
          <div className="py-10 text-center text-muted-foreground">
            No recent activity available.
          </div>
        )}
      </CardContent>
    </Card>
  );
}