import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProblemDescription, createNewProblem } from '../state/problemsSlice';
import { useHistory } from 'react-router-dom';

const OpenHelpDeskNeedyForm = () => {
		const [nickname, setNickname] = useState('');
		const [avatarUrl, setAvatarUrl] = useState('');
		const [checkIfFirstPageFormIsCompleted, setCheckIfFirstPageFormIsCompleted] = useState(false);
		const [problemCategory, setProblemCategory] = useState('');
		const [problemTitle, setProblemTitle] = useState('');
		const [problemTag, setProblemTag] = useState('');
		const [problemTags, setProblemTags] = useState([]);
		const [problemDescriptions, setProblemDescriptions] = useState([]);
		const [problemDescription, setProblemDescription] = useState('');
		const history = useHistory();
		const dispatch = useDispatch();
		const problems = useSelector(state => state.problems.problems);

		const handleNicknameInput = (e) => {
			setNickname(e.target.value);
		};
		const handleAvatarUrlInput = (e) => {
			setAvatarUrl(e.target.value);
		};
		const handleProblemCategoryInput = (e) => {
			setProblemCategory(e.target.value);
		};
		const handleProblemTitleInput = (e) => {
			setProblemTitle(e.target.value);
		};
		const handleProblemDescriptionInput = (e) => {
			setProblemDescription(e.target.value);

		};
		const handleProblemTagInput = (e) => {
			setProblemTag(e.target.value);
		};


		const goToNexPageForm = () => {
			if (!nickname) {
				alert('Enter a nickname!');
				return;
			}
			if (!avatarUrl) {
				alert('Enter an avatar url!');
				return;
			}
			setCheckIfFirstPageFormIsCompleted(true);

		};


		const addNewProblem = () => {
			if (!problemDescription) {
				alert('Enter a problem description!');
				return;
			}
			if (!problemTitle) {
				alert('Enter a problem title!');
				return;
			}
			if (!problemCategory) {
				alert('Enter a problem category!');
				return;
			}

			const problem = {
				nickname,
				avatarUrl,
				problemTags,
				problemTitle,
				problemCategory,
				problemDescriptions: [{ type: 'problem', message: problemDescription }]
			};

			dispatch(createNewProblem(problem));
			history.push('/');

		};

		const addProblemDescription = () => {
			const a = problems
				.filter(problem => problem.nickname === nickname)
				.filter(problem => problem.avatarUrl === avatarUrl)
				.filter(problem => problem.problemTitle === problemTitle)
				.filter(problem => problem.problemCategory === problemCategory);
			if (a.length > 0) {
				dispatch(addNewProblemDescription({ problem: a[0], problemDescription }));
				history.push('/');
			} else addNewProblem();
		};


		const renderTags = () => {
			return problemTags.map((problemTag, index) => (
				<div className={'tag-box'} key={index}>
					<p>{problemTag}</p>
				</div>
			));
		};

		const renderFirstPageForm = () => {
			return (
				<div className={'open-help-desk-needy-form'}>

					<i className="bx bxs-left-arrow-alt go-back" onClick={() => {
						history.push('/');
					}}/>
					<div className={'open-help-desk-needy-form-box'}>
						<div className={'open-help-desk-needy-form-box-left'}>
							<div
								className={`open-help-desk-needy-form-box-left-btn ${!checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}`}>
								<i className="bx bx-user"></i>
								<p>Needy person</p>
							</div>
							<div
								className={`open-help-desk-needy-form-box-left-btn ${checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}`}>
								<i className="bx bxs-wrench"></i>
								<p>Problem</p>
							</div>
						</div>
						<div className={'open-help-desk-needy-form-box-main'}>
							<h1>Needy person</h1>
							<div className={'open-help-desk-needy-form-box-main-inputs-box'}>
								<div className={'input-box'}>
									<label>Nickname</label>
									<input value={nickname} onChange={handleNicknameInput}/>
								</div>
								<div className={'input-box'}>
									<label>Avatar url</label>
									<input value={avatarUrl} onChange={handleAvatarUrlInput}/>
								</div>
							</div>
							<button onClick={goToNexPageForm}>Next</button>

						< /div>
					</div>
				</div>
			);
		};

		const addTag = () => {
			if (!problemTags.includes(problemTag)) {
				setProblemTags([...problemTags, problemTag]);
				setProblemTag('');
			}
		};


		const renderSecondPageForm = () => {
			return (
				<div className={'open-help-desk-needy-form'}>

					<div className={'open-help-desk-needy-form-box'}>
						<div className={'open-help-desk-needy-form-box-left'}>

							<div
								className={`open-help-desk-needy-form-box-left-btn ${!checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}\``}>
								<i className="bx bx-user"></i>
								<p>Needy person</p>
							</div>
							<div
								className={`open-help-desk-needy-form-box-left-btn ${checkIfFirstPageFormIsCompleted ? 'open-help-desk-needy-form-box-left-btn--active' : ''}`}>
								<i className="bx bxs-wrench"></i>
								<p>Problem</p>
							</div>

						</div>
						<div className={'open-help-desk-needy-form-box-main'}>
							<h1>Problem</h1>

							<div className={'open-help-desk-needy-form-box-main-inputs-box'}>
								<div className={'open-help-desk-needy-form-box-main-inputs-box-row'}>
									<div className={'input-box'}>
										<label>Problem category</label>
										<input value={problemCategory} onChange={handleProblemCategoryInput}/>
									</div>
									<div className={'input-box'}>
										<label>Problem title</label>
										<input value={problemTitle} onChange={handleProblemTitleInput}/>
									</div>
								</div>
								<div className={'open-help-desk-needy-form-box-main-inputs-box-row'}>
									<div className={'input-box'}>
										<label>Problem description</label>
										<textarea value={problemDescription} onChange={handleProblemDescriptionInput}/>
									</div>
								</div>
								<div className={'open-help-desk-needy-form-box-main-inputs-box-row'}>

									<div className={'input-box input-tags-box'}>
										<label>Problem tags</label>
										<div className={'all-tags-box'}>
											{renderTags()}
											<input type={'text'} value={problemTag} onChange={handleProblemTagInput} onKeyDown={(e) => {
												if (e.key === 'Enter') {
													addTag();
												}
											}}/>
										</div>
									</div>
								</div>
								<p className={'tags-info'}>Enter the tag, then press enter</p>
							</div>
							<button onClick={addProblemDescription}>Finish</button>
						< /div>
					</div>
				</div>
			);
		};


		return !checkIfFirstPageFormIsCompleted ? renderFirstPageForm() : renderSecondPageForm();
	}
;

export default OpenHelpDeskNeedyForm;