import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
	return (
		<div className='flex justify-between items-center p-3 text-white' id='nav'>
			<ul className='flex gap-3'>
				<li className='text-xl'><NavLink to='/' style={({isActive})=>({color:isActive?'yellow':'white'})}>HOME</NavLink></li>
				<li className='text-xl'><NavLink to='/about' style={({isActive})=>({color:isActive?'yellow':'white'})}>ABOUT</NavLink></li>
				<li className='text-xl'><NavLink to='/recipe' style={({isActive})=>({color:isActive?'yellow':'white'})}>RECIPES</NavLink></li>
			</ul>
		<img src="logo.png" alt=""/>
		</div>
	)
}

export default Nav