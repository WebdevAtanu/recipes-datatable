import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Collection from './Collection';
import Choice from './Choice';
import {useNavigate} from 'react-router-dom'

function Home() {
	const nav=useNavigate();
	const navigate=()=>{
		nav('/recipe')
	}

	return (
		<div id='home'>
			<h1 className='text-center text-3xl m-5'>DELICIOUS</h1>
			<div className="container m-auto p-3" id='slides'>
				<Splide aria-label="My Favorite Images" options={{
    			type: 'loop',
    			gap: '1rem',
    			width:'100%',
    			autoplay: true,
    			interval: 1000,
    			perPage: 3,
    			pauseOnHover : false,
    			resetProgress: false,
    			focus: "center",
        		pagination: false,
        		arrows: true,
        		speed: 600,
        		easing: "cubic-bezier(0.5, 0, 0.5, 1)",
    			breakpoints: {
          			1024: {
            			perPage: 3,
          				},	
          			768: {
            			perPage: 2,
          				},
          			640: {
            			perPage: 2,
          				},
  				}}}>
  					<SplideSlide>
  					<div className="card border border-black h-full p-3 rounded-3xl">
  						<img src="img/1/108855019.webp" alt="food" className='m-auto'/>
  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  					</div>
  					</SplideSlide>
  					<SplideSlide>
  					<div className="card border border-black h-full p-3 rounded-3xl">
  						<img src="img/1/108855053.webp" alt="food" className='m-auto'/>
  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  					</div>
  					</SplideSlide>
  					<SplideSlide>
  					<div className="card border border-black h-full p-3 rounded-3xl">
  						<img src="img/1/108855066.webp" alt="food" className='m-auto'/>
  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  					</div>
  					</SplideSlide>
  					<SplideSlide>
  					<div className="card border border-black h-full p-3 rounded-3xl">
  						<img src="img/1/108855173.webp" alt="food" className='m-auto'/>
  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  					</div>
  					</SplideSlide>
  					<SplideSlide>
  					<div className="card border border-black h-full p-3 rounded-3xl">
  						<img src="img/1/108855224.webp" alt="food" className='m-auto'/>
  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  					</div>
  					</SplideSlide>
  					<SplideSlide>
  					<div className="card border border-black h-full p-3 rounded-3xl">
  						<img src="img/1/108855262.webp" alt="food" className='m-auto'/>
  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  					</div>
  					</SplideSlide>
			</Splide>
			<div className="text-center">
				<button onClick={navigate} className='w-1/8 m-5 px-5 py-2 text-white duration-200 rounded' id='recipebtn'>VIEW ALL RECIPES</button>
				</div>
			</div>
			<div id="brand" className='p-5 m-auto bg-gray-100'>
				<ul className='flex justify-between p-3 md:text-5xl gap-2'>
					<li>Yumm+wow</li>
					<li>POPSUGAR</li>
					<li>Grill taco</li>
					<li>KitchenKing</li>
				</ul>
				
			</div>
			<Collection/>
			<Choice/>
		</div>
	)
}

export default Home