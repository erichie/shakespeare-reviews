import { Routes, Route } from 'react-router-dom';
import { ReviewList } from './pages/ReviewList';
import { ReviewDetails } from './pages/ReviewDetails';

function App() {
  return (
    <Routes>
		<Route path="/" element={<ReviewList />} />
		<Route path="review/:id" element={<ReviewDetails />} />
	</Routes>
  );
}

export default App;
