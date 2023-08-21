import { AuthGateway } from '@/lib/auth/model/auth.gateway';

export class FakeAuthGateway implements AuthGateway {
  authUser!: string;
  async getAuthUser(): Promise<string> {
    return this.authUser;
  }
}
