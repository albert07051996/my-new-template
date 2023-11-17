import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
export const languageSlice = createSlice({

    name: 'foreignSync',
    initialState: {
        language: 'ka',
        navigationBar: '',
        search: 'ძებნა',
        signIn: 'რეგისტრაცია',
        login: 'ავტორიზაცია',
        computersOffice: 'კომპიუტერული და საოფისე ტექნიკა',
        phonesCommunications: 'ტელეფონები და კომუნიკაცია'
    },

    reducers: {
        changeLanguageState(state, action) {

            if (action.payload.value == 'ka') {

                let xx = {
                    ...state, [action.payload.name]: action.payload.value, search: "ძებნა",
                    signIn: 'რეგისტრაცია', login: 'ავტორიზაცია',
                    omputersOffice: 'კომპიუტერული და საოფისე ტექნიკა',
                    phonesCommunications: 'ტელეფონები და კომუნიკაცია'


                }
                state = xx
                console.log(xx, 'xx11')
                return (state)
            }
            if (action.payload.value == 'en') {
                let xx = {
                    ...state, [action.payload.name]: action.payload.value, search: "search",
                    signIn: 'signIn', login: 'login',
                    computersOffice: 'Computers & Office',
                    phonesCommunications: "Phones & Communications"

                }
                state = xx
                console.log(xx, 'xx11')
                return (state)
            }
        }

    }
})
export const { changeLanguageState } = languageSlice.actions;
