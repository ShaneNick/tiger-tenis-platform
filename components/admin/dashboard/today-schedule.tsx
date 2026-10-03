import {
  Clock3,
  MapPin,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const todaysSessions = [
  {
    id: 1,
    time: "9:00 AM",
    program: "4–5 Years Old",
    location: "Cunningham Park",
    coach: "Coach Sarah",
    enrollment: "5 / 6",
    status: "Normal",
  },
  {
    id: 2,
    time: "10:30 AM",
    program: "6–9 Years Old",
    location: "Cunningham Park",
    coach: "Shane",
    enrollment: "6 / 7",
    status: "Normal",
  },
  {
    id: 3,
    time: "12:00 PM",
    program: "10–14 Years Old",
    location: "Bayside",
    coach: "Coach Mike",
    enrollment: "7 / 8",
    status: "Substitute",
  },
];

export function TodaySchedule() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Today&apos;s Schedule</CardTitle>

            <CardDescription>
              Classes and sessions happening today
            </CardDescription>
          </div>

          <Badge variant="secondary">
            {todaysSessions.length} sessions
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {todaysSessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col gap-3 rounded-xl border p-4 lg:flex-row lg:items-center"
          >
            <div className="flex min-w-24 items-center gap-2">
              <Clock3 className="size-4 text-muted-foreground" />

              <span className="text-sm font-medium">
                {session.time}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-medium">
                  {session.program}
                </p>

                {session.status !== "Normal" && (
                  <Badge variant="outline">
                    {session.status}
                  </Badge>
                )}
              </div>

              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {session.location}
                </span>

                <span>
                  {session.coach}
                </span>

                <span className="flex items-center gap-1">
                  <UsersRound className="size-3.5" />
                  {session.enrollment}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}