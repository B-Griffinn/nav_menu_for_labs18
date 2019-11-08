import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Grants from './pages/Grants';
import About from './pages/Grants';
import Login from './pages/Login';
import Signup from './pages/Signup';

import ResponsiveNavigation from './components/ResponsiveNavigation';

import './App.css';
import logo from './logo.svg';

function App() {

  const navLinks = [
	  	{
			text: 'Home',
			path: '/home',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'Grants',
			path: '/grants',
			icon: 'ion-ios-home'
		},
		
		{
			text: 'About',
			path: '/about',
			icon: 'ion-ios-business'
		},
		{
			text: 'Login',
			path: '/login',
			icon: 'ion-ios-bonfire'
		},
		{
			text: 'Signup',
			path: '/signup',
			icon: 'ion-ios-briefcase'
		}
	]

  return (

    <div className="App">
      <ResponsiveNavigation 
        navLinks={ navLinks }
		logo={ logo }
      />
      <Router>
		<Home path="/home" />
        <Grants path="/about" />
        <About path="/about	" />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    </div>

  );
}

export default App;
