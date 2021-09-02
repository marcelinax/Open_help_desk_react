import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OpenHelpDeskHelperCommentsListItem from './OpenHelpDeskHelperCommentsListItem';

const OpenHelpDeskHelperComments = () => {
	const problems = useSelector(state => state.problems.problems);
	const selectedProblemId = useSelector(state => state.selectedProblemId.selectedProblemId);
	const [selectedProblem, setSelectedProblem] = useState({});

	const getSelectedProblem = () => {
		if (selectedProblemId !== '') {
			setSelectedProblem(problems.filter(problem => problem.id === selectedProblemId)[0]);
		}
	};

	const renderMessages = () => {
		return selectedProblem.problemDescriptions.map(problemDescription => (
			<OpenHelpDeskHelperCommentsListItem avatarUrl={selectedProblem.avatarUrl} isProblem={problemDescription.type === 'problem'}
																					comment={problemDescription.message}/>
		));
	};

	useEffect(() => {
		getSelectedProblem();
	}, [selectedProblemId]);

	return (
		<div className={'open-help-desk-helper-comments'}>
			<div className={'open-help-desk-helper-comments-top'}>
				<div className={'open-help-desk-helper-comments-top-needy-person-box'}>
					<h3>{selectedProblem.problemTitle}</h3>
					<div className={'needy-person'}>
						<p>From</p>
						<p className={'nickname'}>{selectedProblem.nickname}</p>
					</div>
				</div>
				<div className={'open-help-desk-helper-comments-top-needy-buttons-box'}>
					<button><i className="bx bx-archive-in"></i></button>
				</div>
			</div>
			<div className={'open-help-desk-helper-comments-main'}>
				{renderMessages()}
			</div>
			<div className={'open-help-desk-helper-comments-write-comment'}>
				<textarea placeholder={'Comment'}></textarea>
				<button>Send</button>
			</div>
		</div>
	);
};

export default OpenHelpDeskHelperComments;