import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './App.css';
import App from './App';

render(
  <BrowserRouter>
	<div className="App__header">
		<h1>Greatness</h1>
		<h3>Reviews of Shakespeare</h3>
	</div>
	<App />
  </BrowserRouter>,
  document.getElementById('root')
);
