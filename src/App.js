import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OpenHelpDeskHomepage from './components/OpenHelpDeskHomepage';
import OpenHelpDeskHelper from './components/OpenHelpDeskHelper';
import OpenHelpDeskNeedy from './components/OpenHelpDeskNeedy';


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/'} exact>
					<OpenHelpDeskHomepage/>
				</Route>
				<Route path={'/open-help-desk-helper'}>
					<OpenHelpDeskHelper/>
				</Route>
				<Route path={'/open-help-desk-needy'}>
					<OpenHelpDeskNeedy/>
				</Route>
			</Switch>
		</BrowserRouter>

	);
}

export default App;
