import { configureStore } from '@reduxjs/toolkit';
import problemsSlice from './state/problemsSlice';

export default configureStore({
	reducer: {
		problems: problemsSlice
	},
});