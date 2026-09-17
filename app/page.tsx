export default function Home() {
  return (
    <main className="min-h-screen bg-background p-10 text-foreground">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <p className="text-sm font-medium text-primary">
            TIGER TENNIS ACADEMY
          </p>

          <h1 className="text-4xl font-bold">
            Design System Test
          </h1>

          <p className="mt-2 text-muted-foreground">
            Shared visual foundation for the Tiger Tennis platform.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Surface</h2>

          <p className="mt-1 text-muted-foreground">
            This should appear as a white card on an off-white background.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground">
            Primary
          </div>

          <div className="rounded-lg bg-success px-4 py-2 font-medium text-success-foreground">
            Success
          </div>

          <div className="rounded-lg bg-warning px-4 py-2 font-medium text-warning-foreground">
            Warning
          </div>

          <div className="rounded-lg bg-info px-4 py-2 font-medium text-info-foreground">
            Information
          </div>

          <div className="rounded-lg bg-destructive px-4 py-2 font-medium text-white">
            Error
          </div>
        </div>

        <div className="rounded-xl bg-sidebar p-6 text-sidebar-foreground">
          <p className="font-semibold">Tiger Tennis</p>

          <p className="text-sm text-sidebar-foreground/60">
            Dark navigation surface
          </p>

          <div className="mt-4 rounded-lg bg-sidebar-accent px-3 py-2">
            Selected navigation item
          </div>
        </div>
      </div>
    </main>
  );
}