import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, currentRoute }) => {
		if(isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p  
						onClick={() => onRouteChange('signin')} 
						className='f3 link dim black underlined pa3 pointer'> sign out 
					</p>
				</nav>
			);
		} else {
			if (currentRoute === 'register')
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p  
						onClick={() => onRouteChange('signin')} 
						className='f3 link dim black underlined pa3 pointer'> sign in 
					</p>
				</nav>
			);
		}
		return ( <nav></nav>);
}

export default Navigation;

//<p  onClick={() => onRouteChange('home')} className='f3 link dim black underlined pa3 pointer'> register </p>

