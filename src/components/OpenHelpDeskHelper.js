import React, { useState } from 'react';
import OpenHelpDeskHelperProblems from './OpenHelpDeskHelperProblems';
import OpenHelpDeskHelperComments from './OpenHelpDeskHelperComments';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const OpenHelpDeskHelper = () => {

	const selectedProblemId = useSelector(state => state.selectedProblemId.selectedProblemId);
	const history = useHistory();
	const [selectInput, setSelectInput] = useState('')

	return (
		<div className={'open-help-desk-helper'}>
			<div className={'open-help-desk-helper-top'}>

				<select>
					<option value={'all-messages'}>All messages</option>
					<option value={'new-messages'}>New messages</option>
					<option value={'archived-messages'}>Archived messages</option>
				</select>
				<button onClick={() => {
					history.push('/');
				}}><i className="bx bx-exit"></i></button>
			</div>
			<div className={'open-help-desk-helper-main'}>
				<OpenHelpDeskHelperProblems/>
				{selectedProblemId !== '' ? <OpenHelpDeskHelperComments/> : null}
			</div>

		</div>
	);
};

export default OpenHelpDeskHelper;