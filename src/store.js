import { configureStore } from '@reduxjs/toolkit';
import problemsSlice from './state/problemsSlice';
import selectedProblemSlice from './state/selectedProblemSlice';

export default configureStore({
	reducer: {
		problems: problemsSlice,
		selectedProblemId: selectedProblemSlice
	},
});