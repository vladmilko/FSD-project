export { userActions, userReducer } from './model/slice/userSlice';
export type { User, UserSchema } from './model/types/user';
export { UserRole } from './model/consts/consts';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from './model/selectors/getUserRole';
