import type { ReactNode } from "react";
import { AlertTriangle, Bell, Info, Lightbulb } from "lucide-react";

type AlertType = "info" | "warning" | "tip" | "attention";

const styles: Record<AlertType, string> = {
  info: "border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-100",
  warning:
    "border-amber-500/35 bg-amber-500/12 text-amber-950 dark:text-amber-100",
  tip: "border-emerald-500/35 bg-emerald-500/12 text-emerald-950 dark:text-emerald-100",
  attention:
    "border-rose-500/35 bg-rose-500/12 text-rose-950 dark:text-rose-100",
};

const icons: Record<AlertType, typeof Info> = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  attention: Bell,
};

export interface AttentionAlertProps {
  title?: string;
  type?: AlertType;
  children: ReactNode;
}

export function AttentionAlert({
  title = "Heads up",
  type = "attention",
  children,
}: AttentionAlertProps) {
  const Icon = icons[type];

  return (
    <div className={`my-6 rounded-lg border p-4 ${styles[type]}`}>
      <div className="mb-2 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </div>
      <div className="text-sm leading-6 [&_p:last-child]:mb-0">{children}</div>
    </div>
  );
}
