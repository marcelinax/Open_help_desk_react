import React from 'react';
import { useHistory } from 'react-router-dom';

const OpenHelpDeskHomepage = () => {
	const history = useHistory();

	return (
		<div className={'open-help-desk-homepage'}>
			<div className={'open-help-desk-homepage-buttons'}>
				<button onClick={() => {
					history.push('/open-help-desk-helper');
				}}>List of problems
				</button>
				<button onClick={() => {
					history.push('/open-help-desk-needy');
				}}>Report a problem
				</button>
			</div>
		</div>
	);
};

export default OpenHelpDeskHomepage;