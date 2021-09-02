import React from 'react';

const OpenHelpDeskHelperCommentsListItem = ({ avatarUrl = '', comment, isProblem }) => {
	return (
		<div
			className={`open-help-desk-helper-comments-list-item ${isProblem ? '' : 'open-help-desk-helper-comments-list-item-right'}`}>
			{isProblem ? <div className={'open-help-desk-helper-comments-list-item-person'} style={{ backgroundImage: `url(${avatarUrl})` }}/> : null}
			<div className={'open-help-desk-helper-comments-list-item-comment'}>
				<p>{comment}</p>
			</div>
		</div>
	);
};

export default OpenHelpDeskHelperCommentsListItem;