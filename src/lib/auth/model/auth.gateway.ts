export interface AuthGateway {
  getAuthUser(): Promise<string>;
}
