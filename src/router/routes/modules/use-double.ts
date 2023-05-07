import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const USE_DOUBLE_ROUTE: AppRouteRecordRaw = {
  path: "/use-double",
  name: "UseDouble",
  redirect: "/use-double",
  component: LAYOUT,
  meta: {
    title: "UseDouble",
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "UseDoublePage",
      component: () => import("@/views/use-double/index.vue"),
      meta: {
        title: "UseDouble"
      }
    },
  ]
};

export default USE_DOUBLE_ROUTE;
