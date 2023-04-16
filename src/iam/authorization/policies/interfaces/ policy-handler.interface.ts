import { Policy } from './policy.interface';
import { ActiveUserData } from '../../../interfaces/active-user.data';

export interface PolicyHandler<T extends Policy> {
  handle(policy: T, user: ActiveUserData): Promise<void>;
}
