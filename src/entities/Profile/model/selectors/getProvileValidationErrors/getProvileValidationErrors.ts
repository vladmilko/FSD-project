import { StateSchema } from 'app/providers/StoreProvider';

export const getProvileValidationErrors = (state: StateSchema) =>
  state.profile?.validateErrors;
