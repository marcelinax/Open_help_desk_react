import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OpenHelpDeskHelperCommentsListItem from './OpenHelpDeskHelperCommentsListItem';
import { setSelectedProblemId } from '../state/selectedProblemSlice';
import { addSolutionToProblemDescription, toggleIsSolved } from '../state/problemsSlice';

const OpenHelpDeskHelperComments = () => {
		const problems = useSelector(state => state.problems.problems);
		const selectedProblemId = useSelector(state => state.selectedProblemId.selectedProblemId);
		const [selectedProblem, setSelectedProblem] = useState({});
		const dispatch = useDispatch();
		const [solution, setSolution] = useState('');

		const getSelectedProblem = () => {
			if (selectedProblemId !== '') {
				const newSelectedProblems = problems.filter(problem => problem.id === selectedProblemId);
				setSelectedProblem(newSelectedProblems[0]);
			}
		};

		const archiveProblem = () => {
			dispatch(toggleIsSolved({ problem: selectedProblem }));

		};

		const sendSolution = () => {
			dispatch(addSolutionToProblemDescription({ problem: selectedProblem, solution }));
		};

		const handleSolutionInput = (e) => {
			setSolution(e.target.value);
		};

		const renderMessages = () => {

			return Object.keys(selectedProblem).length > 0 ? selectedProblem.problemDescriptions.map((problemDescription, index) => (
				<OpenHelpDeskHelperCommentsListItem key={index} avatarUrl={selectedProblem.avatarUrl} isProblem={problemDescription.type === 'problem'}
																						comment={problemDescription.message}/>
			)) : null
				;
		};

		useEffect(() => {
			getSelectedProblem();
		}, [selectedProblemId, problems]);


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
						<button onClick={archiveProblem}>  {selectedProblem.isSolved ? <i className="bx bx-archive-out"></i> : <i className="bx bx-archive-in"></i>}</button>
						<button onClick={() => {
							dispatch(setSelectedProblemId({ problemId: '' }));

						}}><i className="bx bx-x"></i></button>
					</div>
				</div>
				<div className={'open-help-desk-helper-comments-main'}>
					{renderMessages()}
				</div>
				<div className={'open-help-desk-helper-comments-write-comment'}>
					<textarea placeholder={'Comment'} onChange={handleSolutionInput} value={solution}/>
					<button onClick={sendSolution}>Send</button>

				</div>
			</div>
		);
	}
;

export default OpenHelpDeskHelperComments;