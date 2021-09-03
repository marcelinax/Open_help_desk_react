import React, { useEffect, useState } from 'react';
import OpenHelpDeskHelperProblems from './OpenHelpDeskHelperProblems';
import OpenHelpDeskHelperComments from './OpenHelpDeskHelperComments';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSelectedProblemFilter } from '../state/problemsFilterSlice';

const OpenHelpDeskHelper = () => {

	const selectedProblemId = useSelector(state => state.selectedProblemId.selectedProblemId);
	const history = useHistory();
	const dispatch = useDispatch();
	const [problemFilter, setProblemFilter] = useState('');

	const handleProblemFilter = (e) => {
		setProblemFilter(e.target.value);
	};

	const getProblemFilter = () => {
		dispatch(setSelectedProblemFilter({ problemFilter }));
	};

	useEffect(() => {
		getProblemFilter()
	}, [problemFilter])

	return (
		<div className={'open-help-desk-helper'}>
			<div className={'open-help-desk-helper-top'}>

				<select onChange={handleProblemFilter} value={problemFilter}>
					<option value={'all-messages'}>All messages</option>
					<option value={'new-messages'}>New messages</option>
					<option value={'archived-messages'}>Archived messages</option>
				</select>
				<button onClick={() => {
					history.push('/');
				}}><i className="bx bx-exit"/></button>
			</div>
			<div className={'open-help-desk-helper-main'}>
				<OpenHelpDeskHelperProblems/>
				{selectedProblemId !== '' ? <OpenHelpDeskHelperComments/> : null}
			</div>

		</div>
	);
};

export default OpenHelpDeskHelper;