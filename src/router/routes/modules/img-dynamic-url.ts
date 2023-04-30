import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const IMG_DYNAMIC_URL_ROUTE: AppRouteRecordRaw = {
  path: "/img-dynamic-url",
  name: "ImgDynamicUrl",
  redirect: "/img-dynamic-url",
  component: LAYOUT,
  meta: {
    title: "图片动态URL",
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "ImgDynamicUrlPage",
      component: () => import("@/views/img-dynamic-url.vue"),
      meta: {
      }
    }
  ]
};

export default IMG_DYNAMIC_URL_ROUTE;
