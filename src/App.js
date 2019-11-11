import React from 'react';
import { Router } from '@reach/router';

import Home from './components/pages/Home';
import Grants from './components/pages/Grants';
import About from './components/pages/Grants';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
// import Logout from './pages/Logout';

import ResponsiveNavigation from './components/ResponsiveNavigation';

import './App.css';
import logo from './img.png';

function App() {

  const navLinks = [
	  	{
			text: 'Home',
			path: '/home',
			icon: 'ion-ios-home'
		},
		{
			text: 'Grants',
			path: '/grants',
			icon: 'ion-ios-megaphone'
		},
		
		{
			text: 'About',
			path: '/about',
			icon: 'ion-ios-business'
		},
		{
			text: 'Login',
			path: '/login',
			icon: 'ion-ios-log-in'
		},
		{
			text: 'Signup',
			path: '/signup',
			icon: 'ion-ios-person-add'
		},
		// {
		// 	text: 'Logout',
		// 	path: '/logout',
		// 	icon: 'ion-ios-log-out'
		// }
	]

  return (

    <div className="App">
      <ResponsiveNavigation 
        navLinks={ navLinks }
		logo={ logo }
      />
      <Router>
		<Home exact path="/home" />
        <Grants path="/about" />
        <About path="/about	" />
        <Login path="/login" />
        <Signup path="/signup" />
		{/* <Logout path="/" /> */}
      </Router>
    </div>

  );
}

export default App;
