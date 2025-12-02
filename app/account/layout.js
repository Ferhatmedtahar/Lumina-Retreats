import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto h-full">
      <div className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[16rem_1fr] h-full gap-4 md:gap-12 px-2 md:px-8 py-8 md:py-12">
        <SideNavigation />
        <div className="py-1 overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
