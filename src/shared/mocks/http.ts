import { createOpenApiHttp } from "openapi-msw";
import { CONFIG } from "../model/config";
import type { ApiPaths } from "../api/schema";

export const http = createOpenApiHttp<ApiPaths>({
    baseUrl: CONFIG.API_BASE_URL,
})