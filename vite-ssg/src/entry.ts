import { ViteSSG } from "vite-ssg";
 import routes from '~pages'
import App from "./App.vue";
 
 
export const createApp = ViteSSG(App, { routes  });
