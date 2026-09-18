"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CalendarDays,
  CalendarRange,
  ChartNoAxesCombined,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  HandCoins,
  HelpCircle,
  LayoutDashboard,
  MapPin,
  NotebookTabs,
  Settings,
  TicketCheck,
  Trophy,
  UserRound,
  UsersRound,
  WalletCards,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const scheduleItems = [
  {
    title: "Schedule",
    href: "/admin/schedule",
    icon: CalendarDays,
  },
  {
    title: "Classes",
    href: "/admin/classes",
    icon: CalendarRange,
  },
  {
    title: "Private Lessons",
    href: "/admin/private-lessons",
    icon: Clock3,
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: Trophy,
  },
];

const academyItems = [
  {
    title: "Programs",
    href: "/admin/programs",
    icon: NotebookTabs,
  },
  {
    title: "Semesters",
    href: "/admin/semesters",
    icon: GraduationCap,
  },
  {
    title: "Locations",
    href: "/admin/locations",
    icon: MapPin,
  },
];

const peopleItems = [
  {
    title: "Players",
    href: "/admin/players",
    icon: UserRound,
  },
  {
    title: "Families",
    href: "/admin/families",
    icon: UsersRound,
  },
  {
    title: "Coaches",
    href: "/admin/coaches",
    icon: UsersRound,
  },
  {
    title: "Registrations",
    href: "/admin/registrations",
    icon: ClipboardCheck,
  },
];

const operationsItems = [
  {
    title: "Attendance",
    href: "/admin/attendance",
    icon: TicketCheck,
  },
  {
    title: "Makeup Credits",
    href: "/admin/makeup-credits",
    icon: HandCoins,
  },
  {
    title: "Substitutions",
    href: "/admin/substitutions",
    icon: Clock3,
  },
];

const reportingItems = [
  {
    title: "Reports",
    href: "/admin/reports",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Financials",
    href: "/admin/financials",
    icon: CircleDollarSign,
  },
];

const systemItems = [
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/admin/help",
    icon: HelpCircle,
  },
];

type NavigationItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

function NavigationGroup({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavigationItem[];
  pathname: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<Link href={item.href} />}
                  tooltip={item.title}
                  isActive={isActive}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="px-2 py-3">
          <p className="text-sm font-semibold">Tiger Tennis</p>
          <p className="text-xs text-muted-foreground">Admin Portal</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/admin" />}
                  tooltip="Dashboard"
                  isActive={pathname === "/admin"}
                >
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <NavigationGroup
          label="Schedule"
          items={scheduleItems}
          pathname={pathname}
        />

        <NavigationGroup
          label="Academy"
          items={academyItems}
          pathname={pathname}
        />

        <NavigationGroup
          label="People"
          items={peopleItems}
          pathname={pathname}
        />

        <NavigationGroup
          label="Operations"
          items={operationsItems}
          pathname={pathname}
        />

        <NavigationGroup
          label="Reporting"
          items={reportingItems}
          pathname={pathname}
        />
      </SidebarContent>

      <SidebarFooter>
        <NavigationGroup
          label="System"
          items={systemItems}
          pathname={pathname}
        />
      </SidebarFooter>
    </Sidebar>
  );
}