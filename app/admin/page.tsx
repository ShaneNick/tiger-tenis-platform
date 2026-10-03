import {
  CalendarDays,
  HandCoins,
  UserRound,
  UsersRound,
} from "lucide-react";

import { DashboardStatCard } from "@/components/admin/dashboard/dashboard-stat-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <main className="bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              TIGER TENNIS ACADEMY
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              Good morning, Shane
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Here&apos;s what&apos;s happening across the academy today.
            </p>
          </div>

          <Button>+ Quick Add</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardStatCard
            title="Active Players"
            value={184}
            description="12 new this semester"
            icon={UserRound}
          />

          <DashboardStatCard
            title="Active Classes"
            value={28}
            description="312 total enrollments"
            icon={CalendarDays}
          />

          <DashboardStatCard
            title="Active Coaches"
            value={13}
            description="8 coaching today"
            icon={UsersRound}
          />

          <DashboardStatCard
            title="Makeup Credits"
            value={37}
            description="7 expiring soon"
            icon={HandCoins}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Today&apos;s Schedule</CardTitle>
              <CardDescription>
                Tuesday, September 29
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex min-h-48 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
                Schedule coming next
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action Required</CardTitle>
              <CardDescription>
                Items that need your attention
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="text-4xl font-semibold">12</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}