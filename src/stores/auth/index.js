import { createSlice } from '@reduxjs/toolkit'

const initialStateAuth = {
    isAuth: false,
    email:'',
    password:'',
    token: '',
}

export  const  authSlice = createSlice({name:'auth', initialState: initialStateAuth, 
reducers: {
    login: (state, action) => {
        const { email, password } = action.payload;
        state.email = email;
        state.password = password;
        

    }


}
});

export const {login} = authSlice.actions;
export default authSlice.reducer;