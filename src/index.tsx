import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './App.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
