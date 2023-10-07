import React, {useState} from 'react'; 
import {Button, TopButtonText} from './Styles';

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false);

const [desktopView, setDesktopView] = useState(false);

const toggleDesktopView = () => {
	const width = window.innerWidth;
	if (width <= 768) {
		setDesktopView(false);
	}
	else if (width > 768) {
		setDesktopView(true);
	}
};

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 
window.addEventListener('resize', toggleDesktopView);

return ( 
	<Button style={{left: desktopView ? 'none' : '2rem', right: desktopView ? '2rem' : 'none'}}> 
	<TopButtonText onClick={scrollToTop} 
	style={{display: visible ? 'flex' : 'none'}}>To Top ^</TopButtonText> 
	</Button> 
); 
} 

export default ScrollButton; 
