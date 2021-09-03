import { configureStore } from '@reduxjs/toolkit';
import problemsSlice from './state/problemsSlice';
import selectedProblemSlice from './state/selectedProblemSlice';
import problemsFilterSlice from './state/problemsFilterSlice';

export default configureStore({
	reducer: {
		problems: problemsSlice,
		selectedProblemId: selectedProblemSlice,
		problemsFilter: problemsFilterSlice
	},
});