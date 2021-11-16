import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import config from '../config';

// First, create the thunk
const registerTeam = createAsyncThunk(
    "team/registerTeam",
    async (requestBody, thunkAPI) => {
        const response = await fetch(`${config.base_url}/api/v1/teamRegistration`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (response.status === 500) {
            throw new Error("GENERAL_API_ERROR");
        }

        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(data.errorCode);
        }
        return data;
    }
)

// Then, handle actions in your reducers:
export const teamSlice = createSlice({
  name: 'team',
  initialState: { isLoadingRegister: false, errorRegisterCode: "", id: null },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(registerTeam.pending, (state, action) => {
        state.isLoadingRegister = true;
        state.errorRegisterCode = '';
        state.id = null;
    });
    builder.addCase(registerTeam.fulfilled, (state, action) => {
        state.isLoadingRegister = false;
        state.errorRegisterCode = '';
        state.id = action.payload.id;
    });
    builder.addCase(registerTeam.rejected, (state, action) => {
        state.isLoadingRegister = false;
        state.errorRegisterCode = action.error.message;
    });
  },
})

export { registerTeam };
export default teamSlice.reducer;
