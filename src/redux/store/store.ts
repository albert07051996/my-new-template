import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../slices/appSlice';
import { styleSlice } from '../slices/styleSlice';
import { languageSlice } from '../slices/languageSlice';



const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    styleStory: styleSlice.reducer,
    languageStory: languageSlice.reducer,

  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
