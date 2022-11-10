
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
  name: "about",
  component: () => import("../components/Home.vue")
},
{
  path: "/about2",
  name: "about",
  component: () => import("../components/About.vue")
}
]

export default routers