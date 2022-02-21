// default

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

// pages
import Home from "@/pages/Home";

// Routering
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]


})
export default router
