const routers = [{
    path: "/",
    name: "home",
    component: () => import("../components/HelloWorld.vue")
},
    {
        path: "/about",
        name: "about",
        component: () => import("../components/Good.vue")
    },
    {
        path: "/about1",
        name: "about1",
        component: () => import("../components/Home.vue")
    },
    {
        path: "/about2",
        name: "about2",
        component: () => import("../components/About.vue")
    },
    {
        path: "/layout",
        name: "layout",
        component: () => import("../components/layout.vue")
    }
]

export default routers