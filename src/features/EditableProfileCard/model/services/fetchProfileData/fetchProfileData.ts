import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<ValidateProfileError[]>
>('profile/fetchProfileData', async (profileId, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
