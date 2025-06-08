import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "/about",
    file: "routes/About.tsx",
  },
  {
    path: "/post/:id",
    file: "routes/AboutDetail.tsx",
  },
  {
    path: "/tags",
    file: "routes/Tags.tsx",
  },
  {
    path: "/categories",
    file: "routes/Categories.tsx",
  },
  {
    path: "/admin",
    file: "routes/Admin.tsx",
  },
  {
    path: "/admin/update/:id",
    file: "routes/AdminPUT.tsx",
  },
  {
    path: "/admin/delete/:id",
    file: "routes/AdminDELETE.tsx",
  },
] satisfies RouteConfig;
