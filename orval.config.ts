import { defineConfig } from "orval"

export default defineConfig({
    eventApi: {
        input: "http://localhost:8080/v3/api-docs", 
        output: {
            target: "./src/http/eventApi.ts",
            client: "fetch",
            httpClient: "fetch",
            clean: true,
            baseUrl: "http://localhost:8080",

            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                },
            },
        },
    },
})