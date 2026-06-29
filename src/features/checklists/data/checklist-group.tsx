"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
} from "lucide-react";

import ChecklistItem from "./checklist-item";

type Props = {
  title: string;
  items: string[];
};

export default function ChecklistGroup({
  title,
  items,
}: Props) {
  const [expanded, setExpanded] = useState(true);

  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );

  const completed = useMemo(
    () => checkedItems.filter(Boolean).length,
    [checkedItems]
  );

  const progress =
    (completed / items.length) * 100;

  function toggleItem(index: number) {
    setCheckedItems((prev) =>
      prev.map((item, i) =>
        i === index ? !item : item
      )
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
            <ClipboardCheck className="h-6 w-6 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {completed} of {items.length} completed
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden w-40 md:block">
            <div className="mb-2 flex justify-between text-xs text-slate-500">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-emerald-600 transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            {completed}/{items.length}
          </span>

          {expanded ? (
            <ChevronUp className="h-5 w-5 text-slate-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-500" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="space-y-2 border-t border-slate-100 p-6">
          {items.map((item, index) => (
            <ChecklistItem
              key={item}
              title={item}
              checked={checkedItems[index]}
              onToggle={() =>
                toggleItem(index)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}