import React from 'react';
import OpenHelpDeskHelperProblems from './OpenHelpDeskHelperProblems';
import OpenHelpDeskHelperComments from './OpenHelpDeskHelperComments';
import { useSelector } from 'react-redux';

const OpenHelpDeskHelper = () => {

	const selectedProblemId = useSelector(state => state.selectedProblemId.selectedProblemId);

	return (
		<div className={'open-help-desk-helper'}>
			<OpenHelpDeskHelperProblems/>
			{selectedProblemId !== '' ? <OpenHelpDeskHelperComments/> : null}
		</div>
	);
};

export default OpenHelpDeskHelper;