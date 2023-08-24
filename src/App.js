import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './layouts/Home'
import Login from './layouts/Login'
import Register from './layouts/Register'
import Success from './layouts/Success'
import Cancel from './layouts/Cancel'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<Register />}></Route>
					<Route path='/success' element={<Success />}></Route>
					<Route path='/cancel' element={<Cancel />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
