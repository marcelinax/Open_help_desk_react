import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const saveProblemInLocalStorage = (state) => {
	localStorage.setItem('problems', JSON.stringify(state));
};

const loadProblemFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('problems') || '[]');
};

export const problemsSlice = createSlice({
	name: 'problems',
	initialState: {
		problems: loadProblemFromLocalStorage()
	},
	reducers: {
		createNewProblem: (state, action) => {
			const { nickname, avatarUrl, problemTitle, problemCategory, problemTags, problemDescription } = action.payload;
			const newProblem = {
				nickname,
				avatarUrl,
				problemTags,
				problemTitle,
				problemCategory,
				problemDescription,
				id: uuidv4(),
				isSolved: false
			};

			state.problems = [...state.problems, newProblem];
			saveProblemInLocalStorage(state.problems);
		},
	}

});

export const { createNewProblem } = problemsSlice.actions;
export default problemsSlice.reducer;