import type { AppRouteRecordRaw } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const TEST_ROUTE: AppRouteRecordRaw = {
    path: '/test',
    name: 'Test',
    component: LAYOUT,
    redirect: '/test/a',
    meta: {
        title: 'Test'
    },
    children: [
        {
            path: 'a',
            name: 'TestAPage',
            component: () => import('@/views/test/A.vue'),
            meta: {
                title: 'TestA'
            }
        },
        {
            path: 'b',
            name: 'TestBPage',
            component: () => import('@/views/test/B.vue'),
            meta: {
                title: 'TestB'
            }
        }
    ]
}

export default TEST_ROUTE