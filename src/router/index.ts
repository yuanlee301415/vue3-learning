import type { RouteRecordRaw } from "vue-router";

import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: basicRoutes as unknown as RouteRecordRaw[],
});

export default router;
