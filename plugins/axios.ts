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

    api.interceptors.request.use((req) => {
        const access_token = useCookie("access_token");
        if (access_token.value) {
            req.headers.Authorization = `Bearer ${access_token.value}`;
        }

        return req;
    });

    return {
        provide: {
            api,
        },
    };
});
