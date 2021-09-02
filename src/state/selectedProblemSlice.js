import { createSlice } from '@reduxjs/toolkit';

export const selectedProblemSlice = createSlice({
	name: 'selectedProblem',
	initialState: {
		selectedProblemId: ''
	},
	reducers: {
		setSelectedProblemId: (state, action) => {
			const { problemId } = action.payload;
			state.selectedProblemId = problemId;
		}
	}
});

export const { setSelectedProblemId } = selectedProblemSlice.actions;
export default selectedProblemSlice.reducer;