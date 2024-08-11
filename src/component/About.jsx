import React,{useState} from 'react';

function About() {
	let dataArr=[{
		title:'Cooking',
		para:"Cooking is an art and a science that brings people together over shared meals. It involves combining ingredients with care, skill, and creativity to create delicious and nourishing dishes. From simple recipes to complex culinary masterpieces, cooking allows for experimentation with flavors, textures, and techniques. It’s a way to express cultural traditions, celebrate special occasions, and enjoy everyday moments. Whether you're a seasoned chef or a beginner, the process of preparing food can be both relaxing and rewarding, offering a sense of accomplishment as you transform raw ingredients into something delightful to eat."},
			{
				title:'Recipes',
				para:"Food recipes are the blueprints for culinary creations, guiding cooks of all levels in crafting delicious dishes. They offer step-by-step instructions, ingredient lists, and techniques to help achieve the desired flavor and texture. Recipes can range from simple, quick meals to elaborate gourmet dishes, catering to various tastes and dietary needs. They also preserve cultural traditions and family secrets, passing down cherished methods and flavors through generations. Whether you're exploring new cuisines or perfecting a favorite dish, food recipes provide the foundation for creativity in the kitchen, allowing you to experiment and make each meauniquely your own."
			}]
	const [index,setIndex]=useState(null);
	const indexing=(i)=>{
		setIndex(i===index?null:i);
	}
	return (
		<div>
		<h1 className='text-center text-3xl m-5'>ABOUT US</h1>
<div className="flex items-center gap-5 flex-col md:flex-row p-3">
	<img src="cook.jpg" alt="" className='w-1/2 md:w-1/3'/>
	<div>
		<h2 className='mb-5 text-xl text-center'>"Yum Delight" is a culinary experience that tantalizes the taste buds with a perfect blend of flavors and textures. Offering a variety of dishes crafted with fresh, quality ingredients, it promises satisfaction in every bite. Whether savory or sweet, Yum Delight is all about indulging in deliciousness.</h2>
		{
			dataArr.map((item,i)=>{
				return(
				<div key={i} className='bg-gray-200 mb-1'>
				<div className='flex items-center justify-between rounded accorion' onClick={()=>indexing(i)}>
				<h2 className='text-2xl p-1'>{item.title}</h2>
				<p className='p-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  					<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
					</svg></p>	
				</div>
				{
					index===i?<div className='accordionPara p-3'>{item.para}</div>:null
				}
				</div>
				)
			})
		}
	</div>
</div>
		</div>
	)
}

export default About