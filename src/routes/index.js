import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Student from "@/pages/Student.vue";
import Teacher from "@/pages/Teacher.vue";

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home,
    },
    {
        path: "/Student",
        name:"Student",
        component: Student,
    },
    {
        path: "/Teacher",
        name:"Teacher",
        component: Teacher,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;