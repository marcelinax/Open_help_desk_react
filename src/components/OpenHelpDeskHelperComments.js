import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OpenHelpDeskHelperCommentsListItem from './OpenHelpDeskHelperCommentsListItem';
import { setSelectedProblemId } from '../state/selectedProblemSlice';

const OpenHelpDeskHelperComments = () => {
		const problems = useSelector(state => state.problems.problems);
		const selectedProblemId = useSelector(state => state.selectedProblemId.selectedProblemId);
		const [selectedProblem, setSelectedProblem] = useState({});
		const dispatch = useDispatch();

		const getSelectedProblem = () => {
			if (selectedProblemId !== '') {
				setSelectedProblem(problems.filter(problem => problem.id === selectedProblemId)[0]);
			}
		};

		const renderMessages = () => {

			return Object.keys(selectedProblem).length > 0 ? selectedProblem.problemDescriptions.map(problemDescription => (
				<OpenHelpDeskHelperCommentsListItem avatarUrl={selectedProblem.avatarUrl} isProblem={problemDescription.type === 'problem'}
																						comment={problemDescription.message}/>
			)) : null
				;
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
						<button onClick={() => {
							dispatch(setSelectedProblemId({ problemId: '' }));

						}}><i className="bx bx-x"></i></button>
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
	}
;

export default OpenHelpDeskHelperComments;