import { User } from '@/lib/user/user.model';

export interface AuthRepository {
  getAuthenticatedUser(): Promise<User>;
}
