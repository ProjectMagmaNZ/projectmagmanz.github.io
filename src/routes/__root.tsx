import { Outlet, createRootRoute } from "@tanstack/react-router";
import { MobileProvider } from "@/context/MobileContext";
// import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
// import { TanstackDevtools } from "@tanstack/react-devtools";

import { Footer, Header } from "@/components";
import "./styles/root.css";

export const Route = createRootRoute({
  component: () => (
    <div className="container">
      <Header />
      <main className="main">
        <MobileProvider>
          <Outlet />
        </MobileProvider>
      </main>
      <Footer />
      {/* <TanstackDevtools
        config={{
          position: "bottom-left",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </div>
  ),
});
