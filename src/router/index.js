import RobotBuilder from "@/build/RobotBuilder.vue";
import HomePage from "@/home/HomePage.vue";
import { createRouter } from "vue-router";


export default createRouter({
    routes:[{
        path:'/',
        name:'Главная',
        component: HomePage,
    },
    {
        path:'/build',
        name:'Построй робота',
        component: RobotBuilder,
    }
]
})