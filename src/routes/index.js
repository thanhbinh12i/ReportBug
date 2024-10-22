import LayoutDefault from "../layout/LayoutDefault";
import CreateProject from "../page/CreateProject";

export const routes = [
      {
            path: "/",
            element: <LayoutDefault />,
            children: [
                  {
                        path: "createproject",
                        element: <CreateProject />
                  }
            ]
      }
]