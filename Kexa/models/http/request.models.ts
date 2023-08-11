import { HttpCode } from "./code.models";

export interface HttpRequest {
    certificate: any|null;
    body: any|null;
    headers: any|null;
    code: number|null;
    url: string|null;
    ip: any|null;
}