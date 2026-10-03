"use client";

import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger />

      <div className="relative hidden w-full max-w-md md:block">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          type="search"
          placeholder="Search academy..."
          className="pl-9"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
        >
          <Bell />
        </Button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-muted"
        >
          <Avatar>
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>

          <div className="hidden leading-tight lg:block">
            <p className="text-sm font-medium">Shane</p>
            <p className="text-xs text-muted-foreground">
              Administrator
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}