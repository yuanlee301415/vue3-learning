import type { AppRouteRecordRaw } from "@/router/types";

import { HOME_ROUTE, PAGE_NOT_FOUND_ROUTE } from "@/router/routes/basic";
import AboutRoute from "@/router/routes/modules/about";
import TestRoute from "@/router/routes/modules/test";

export const ROOT_ROUTE: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: '/home',
    meta: {
        title: 'Root'
    }
}

export const basicRoutes = [
    ROOT_ROUTE,
    HOME_ROUTE,
    AboutRoute,
    TestRoute,
    PAGE_NOT_FOUND_ROUTE
]