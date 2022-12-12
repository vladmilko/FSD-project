import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface EditableProfileCardSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: boolean;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
