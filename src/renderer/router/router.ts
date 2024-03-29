import * as VueRouter from "vue-router";
//路由规则描述数组
const routes = [
  { path: "/", redirect: "/WindowMain/Chat" },
  {
    path: "/WindowMain",
    component: () => import("../windows/WindowMain.vue"),
    children: [
      { path: "Chat", component: () => import("../windows/WindowMain/Chat.vue") },
      { path: "Contact", component: () => import("../windows/WindowMain/Contact.vue") },
      { path: "Collection", component: () => import("../windows/WindowMain/Collection.vue") },
    ],
  },
  {
    path: "/WindowSetting",
    component: () => import("../windows/WindowSetting.vue"),
    children: [{ path: "AccountSetting", component: () => import("../windows/WindowSetting/AccountSetting.vue") }],
  },
  {
    path: "/WindowUserInfo",
    component: () => import("../windows/WindowUserInfo.vue"),
  },
];
//导出路由对象
export let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});