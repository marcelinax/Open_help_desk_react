import React from 'react';
import { useSelector } from 'react-redux';
import OpenHelpDeskHelperProblemsListItem from './OpenHelpDeskHelperProblemsListItem';

const OpenHelpDeskHelperProblems = () => {
	const problems = useSelector(state => state.problems.problems);


	const renderProblemsListItems = () => {
		return problems.map((problem, index) => (
			<OpenHelpDeskHelperProblemsListItem key={index} avatarUrl={problem.avatarUrl} nickname={problem.nickname} problemCategory={problem.problemCategory}
																					problemTags={problem.problemTags} problemTitle={problem.problemTitle} id={problem.id}/>
		));
	};

	return (
		<div className={'open-help-desk-helper-problems'}>
			<div className={'open-help-desk-helper-problems-list'}>
				{renderProblemsListItems()}
			</div>
		</div>
	);
};

export default OpenHelpDeskHelperProblems;