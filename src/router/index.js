import { createRouter, createWebHashHistory } from 'vue-router'

import dashboard from '@/views/dashboard.vue'
import sidebar from './sidebar'
let menus = []
for(let groupName in sidebar){
    for(let item of sidebar[groupName]){
        menus.push({
            name:item.name,
            path: item.path,
            component: () => import('../views/' + groupName + item.path)
        })
    }
}

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: dashboard
        },
        ...menus
        // {
        //     path: '/',
        //     component: import('@/views/dashboard.vue')
        // },
    ]
})

export default router