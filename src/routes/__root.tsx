import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--parchment-light)", padding: 20 }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 72, color: "var(--navy-deep)" }}>404</h1>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--navy-soft)", margin: "12px 0 24px" }}>
          This page has wandered off the mountain path.
        </p>
        <a href="/" className="btn btn-amazon">Return home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "root" }); }, [error]);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--parchment-light)", padding: 20 }}>
      <div style={{ textAlign: "center", maxWidth: 500 }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--navy-deep)", fontSize: 32 }}>Something went quiet</h1>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--navy-soft)", margin: "12px 0 20px" }}>
          Please try again in a moment.
        </p>
        <button className="btn btn-amazon" onClick={() => { router.invalidate(); reset(); }}>Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Janice Flowers | Life from the Mountain, a Christian Novel of Redemption" },
      { name: "description", content: "A heartfelt journey of faith, healing, and second chances by Christian author Janice Flowers. Read Life from the Mountain today." },
      { property: "og:title", content: "Janice Flowers | Life from the Mountain, a Christian Novel of Redemption" },
      { property: "og:description", content: "A heartfelt journey of faith, healing, and second chances by Christian author Janice Flowers. Read Life from the Mountain today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Janice Flowers | Life from the Mountain, a Christian Novel of Redemption" },
      { name: "twitter:description", content: "A heartfelt journey of faith, healing, and second chances by Christian author Janice Flowers. Read Life from the Mountain today." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/03d76123-395c-4ec9-8430-33e1d225a439/id-preview-7109dc64--b34f6b6c-0578-46c7-80fc-7ee58d4b765e.lovable.app-1784062474360.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/03d76123-395c-4ec9-8430-33e1d225a439/id-preview-7109dc64--b34f6b6c-0578-46c7-80fc-7ee58d4b765e.lovable.app-1784062474360.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Alex+Brush&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="page-fade" key={typeof window !== "undefined" ? window.location.pathname : "ssr"}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </QueryClientProvider>
  );
}
