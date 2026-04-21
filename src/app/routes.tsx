import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import ProfessionalDevelopment from "./pages/ProfessionalDevelopment";
import SharedHeader from "./components/SharedHeader";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center relative size-full">
      <SharedHeader />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "resources", Component: Resources },
      { path: "partners", Component: Partners },
      { path: "professional-development", Component: ProfessionalDevelopment },
    ],
  },
]);
