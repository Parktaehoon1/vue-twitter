import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import NotificationsView from "@/pages/NotificationsView.vue";
import MessageView from "@/pages/MessageView.vue";
import ProfileView from "@/pages/ProfileView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/notifications",
    component: NotificationsView,
  },
  {
    path: "/messages",
    component: MessageView,
  },
  {
    path: "/profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
