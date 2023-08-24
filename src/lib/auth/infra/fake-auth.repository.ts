import { AuthRepository } from '@/lib/auth/model/auth.repository';
import { User } from '@/lib/user/user.model';

export class FakeAuthRepository implements AuthRepository {
  authenticatedUser!: User;
  async getAuthenticatedUser(): Promise<User> {
    return Promise.resolve(this.authenticatedUser);
  }
}
