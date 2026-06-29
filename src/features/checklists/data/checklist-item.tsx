import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  title: string;
  checked: boolean;
  onToggle: () => void;
};

export default function ChecklistItem({
  title,
  checked,
  onToggle,
}: Props) {
  return (
    <div className="flex items-center justify-between border-b py-4 last:border-0">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={checked}
          onCheckedChange={onToggle}
        />

        <span
          className={
            checked
              ? "line-through text-slate-400"
              : "text-slate-700"
          }
        >
          {title}
        </span>
      </div>

      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
        Daily
      </span>
    </div>
  );
}