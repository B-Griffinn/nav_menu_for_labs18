import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Grants from './components/pages/Grants';
import About from './components/pages/About';
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
	  // Logout is a private route to those who are logged in
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
		<Route exact path="/home" component={ Home } />
        <Route path="/grants" component={ Grants } />
        <Route path="/about"  component={ About } />
        <Route path="/login"  component={ Login } />
        <Route path="/signup" component={ Signup } />
		{/* <Logout path="/" /> */}
	</div>
  )
}

export default App;
