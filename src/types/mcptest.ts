export interface MCPApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
