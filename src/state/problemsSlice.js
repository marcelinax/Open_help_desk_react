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
			const { nickname, avatarUrl, problemTitle, problemCategory, problemTags, problemDescriptions } = action.payload;
			const newProblem = {
				nickname,
				avatarUrl,
				problemTags,
				problemTitle,
				problemCategory,
				problemDescriptions,
				id: uuidv4(),
				isSolved: false
			};

			state.problems = [...state.problems, newProblem];
			saveProblemInLocalStorage(state.problems);
		},
		addNewProblemDescription: (state, action) => {
			const { id } = action.payload.problem;
			const { problemDescription } = action.payload;
			const problem = state.problems.filter(problem => problem.id = id)[0];
			problem.problemDescriptions = [...problem.problemDescriptions, { type: 'problem', message: problemDescription }];
			saveProblemInLocalStorage(state.problems);
		}
	}
});

export const { createNewProblem, addNewProblemDescription } = problemsSlice.actions;
export default problemsSlice.reducer;