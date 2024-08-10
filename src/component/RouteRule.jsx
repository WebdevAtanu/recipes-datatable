import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Table from './Table';
import Footer from './Footer'

function RouteRule() {
	return (
			<BrowserRouter>
			<Nav/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/recipe' element={<Table/>}/>
				</Routes>
				<Footer/>
			</BrowserRouter>
	)
}

export default RouteRule