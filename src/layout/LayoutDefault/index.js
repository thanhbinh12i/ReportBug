import { Outlet } from "react-router-dom";
import MenuLayout from "./MenuLayout";
import SidebarLayout from "./SidebarLayout";

function LayoutDefault() {
      return (
            <>
                  <div className="jira">
                        <SidebarLayout />
                        <MenuLayout />
                        <Outlet />
                  </div>
            </>
      )
}
export default LayoutDefault;