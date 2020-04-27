export interface Response {
    data: any; // generic since response data can come in any type
    message?: string; // for error message during failure
}
