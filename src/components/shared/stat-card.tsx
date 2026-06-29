import { ArrowUpRight, LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E8E2D8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Decorative accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#6B103E]" />

      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F8F5F0] transition-transform duration-500 group-hover:scale-125" />

      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#3A2030]">
            {value}
          </h2>

          <div className="flex items-center gap-2">
            <ArrowUpRight className="h-4 w-4 text-[#6B103E]" />

            <p className="text-sm text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8E2D8] bg-[#F8F5F0] transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
          <Icon className="h-6 w-6 text-[#6B103E]" />
        </div>
      </div>
    </div>
  );
}