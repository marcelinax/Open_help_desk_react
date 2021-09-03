import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProblemId } from '../state/selectedProblemSlice';
import { toggleIsSolved } from '../state/problemsSlice';

const OpenHelpDeskHelperProblemsListItem = ({ problemTitle, problemCategory, problemTags, nickname, avatarUrl, id }) => {
	const dispatch = useDispatch();
	const selectedId = useSelector(state => state.selectedProblemId.selectedProblemId);
	const problems = useSelector(state => state.problems.problems);
	const selectedProblem = problems.filter(problem => problem.id === id)[0];
	const selectProblem = (problemId) => {
		dispatch(setSelectedProblemId({ problemId }));

	};


	const toggleArchivizeProblem = () => {
		dispatch(toggleIsSolved({ problem: selectedProblem }));
	};

	return (
		<div
			className={selectedId === id ? 'open-help-desk-helper-problems-list-item--active' : 'open-help-desk-helper-problems-list-item'}
			onClick={() => selectProblem(id)}>
			<div className={'open-help-desk-helper-problems-list-item-needy-person-box'}>
				<div className={'avatar'} style={{ backgroundImage: `url(${avatarUrl})` }}/>
				<p className={'nickname'}>{nickname}</p>
			</div>

			<div className={'open-help-desk-helper-problems-list-item-problem-info'}>
				<p className={'problem-title'}>{problemTitle}</p>
				<p className={'problem-tags'}>{problemTags.map(problemTag => `#${problemTag} `)}</p>
			</div>
			<div className={'problem-category-box'}>
				<p className={'problem-category'}>{problemCategory}</p>
			</div>
			{selectedProblem.isSolved ? <i className="bx bx-archive-out" onClick={toggleArchivizeProblem}/> :
				<i className="bx bx-archive-in" onClick={toggleArchivizeProblem}/>}

		</div>
	);
};

export default OpenHelpDeskHelperProblemsListItem;