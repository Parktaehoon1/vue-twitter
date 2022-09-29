import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import NotificationsView from "@/pages/NotificationsView.vue";
import MessageView from "@/pages/MessageView.vue";
import ProfileView from "@/pages/ProfileView.vue";
import RegisterView from "@/pages/RegisterView.vue";
import LoginView from "@/pages/LoginView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: HomeView,
    title: "홈",
    icon: "fas fa-home fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/",
    component: HomeView,
    title: "탐색하기",
    icon: "fas fa-hashtag fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/notifications",
    component: NotificationsView,
    title: "알림",
    icon: "far fa-bell fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/messages",
    component: MessageView,
    title: "쪽지",
    icon: "far fa-envelope fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/",
    component: MessageView,
    title: "북마크",
    icon: "far fa-bookmark fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/",
    component: MessageView,
    title: "리스트",
    icon: "far fa-list-alt fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/profile",
    component: ProfileView,
    title: "프로필",
    icon: "far fa-user fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/",
    component: ProfileView,
    title: "더보기",
    icon: "fas fa-ellipsis-h fa-fw text-2xl",
    meta: {
      isMenu: true,
      layout: "DefaultLayout",
      requireAuth: true,
    },
  },
  {
    path: "/register",
    component: RegisterView,
    meta: {
      isMenu: false,
      layout: "EmptyLayout",
    },
  },
  {
    path: "/login",
    component: LoginView,
    meta: {
      isMenu: false,
      layout: "EmptyLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation guard
router.beforeEach((to, from, next) => {
  const currentUser = store.state.user;
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  console.log("auth값", requireAuth);
  if (requireAuth && !currentUser) {
    next("/login");
  } else {
    next();
  }
  console.log(to);
  console.log(from);
  // router.push("/login");
});

export default router;
