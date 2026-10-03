import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

type DashboardStatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
};

export function DashboardStatCard({
  title,
  value,
  description,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <Card className="gap-4 rounded-2xl py-5">
      <CardHeader className="flex flex-row items-start justify-between px-5">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight">
            {value}
          </p>
        </div>

        <div className="flex size-9 items-center justify-center rounded-full bg-muted">
          <Icon className="size-4" />
        </div>
      </CardHeader>

      <CardContent className="px-5">
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}