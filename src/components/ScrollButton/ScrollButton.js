import React, {useState} from 'react'; 
import {Button, TopButtonText} from './Styles';

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false); 
const [desktop, setDesktop] = useState(true);

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

const toggleDesktop = () => {
	const width = window.innerWidth;
	if (width <= 768) {
		setDesktop(false);
	}
	else if (width > 768) {
		setDesktop(true);
	}
}

window.addEventListener('scroll', toggleVisible); 
window.addEventListener('resize', toggleDesktop);

return ( 
	<Button style={{right: desktop ? '2rem' : '', left: desktop ? '' : '2rem'}}> 
	<TopButtonText onClick={scrollToTop} 
	style={{display: visible ? 'flex' : 'none'}}>To Top ^</TopButtonText> 
	</Button> 
); 
} 

export default ScrollButton; 
