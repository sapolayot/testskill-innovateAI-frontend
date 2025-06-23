import axios from "axios";

interface PublicRuntimeConfig {
    apiBase: string;
}

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig() as {
        public: PublicRuntimeConfig;
    };

    const api = axios.create({
        baseURL: config.public.apiBase,
    });

    return {
        provide: {
            api,
        },
    };
});
