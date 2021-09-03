import { createSlice } from '@reduxjs/toolkit';

export const problemsFilterSlice = createSlice({
	name: 'problemsFilter',
	initialState: {
		selectedProblemFilter: ''
	},
	reducers: {
		setSelectedProblemFilter: (state, action) => {
			const { problemFilter } = action.payload;
			state.selectedProblemFilter = problemFilter;


		}

	}

});

export const { setSelectedProblemFilter } = problemsFilterSlice.actions;
export default problemsFilterSlice.reducer;