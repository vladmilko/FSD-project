import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'TestLast',
  first: 'TestFirst',
  city: 'TestCity',
  currency: Currency.USD,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<EditableProfileCardSchema> = { readonly: false };
    expect(
      profileReducer(
        state as EditableProfileCardSchema,
        profileActions.setReadonly(true),
      ),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      data,
      form: { username: '' },
    };

    expect(
      profileReducer(
        state as EditableProfileCardSchema,
        profileActions.cancelEdit(),
      ),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      form: { username: '123' },
    };

    expect(
      profileReducer(
        state as EditableProfileCardSchema,
        profileActions.updateProfile({
          username: '123456',
        }),
      ),
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(
        state as EditableProfileCardSchema,
        updateProfileData.pending,
      ),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as EditableProfileCardSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
