import React,{useState,useEffect,useLayoutEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


function App() {
  const [data,setData]=useState([]);
  const [alert,setAlert]=useState(true);
  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes')
    .then(res=>{
      setData(res.data.recipes);
    })
    .catch(error=>{
      console.log(error);
    })
  })

  const colData=[
    {
      name:'Dish name',
      selector:row=><p className='text-black'>{row.name}</p>,
      width:'15%'
    },
    {
      name:'ingredients',
      selector:row=>row.ingredients.join('--'),
      wrap:true,
      width:'20%'
    },
    {
      name:'instructions',
      selector:row=>row.instructions.join('--'),
      wrap:true,
      width:'40%'
    },
    {
      selector:row=><img src={row.image} style={{width:'100%',aspectRatio:1/0.6}}/>
    },
    ]
  return (
    <div>
    {
      alert?<div className=' bg-slate-300 p-3 flex justify-between'>
      <p className=''>Open with desktop for better visibility</p>
      <button onClick={()=>setAlert(false)} className=''><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg></button>
      </div>:null
    }
      
      <h1 className='text-center text-3xl m-5'>RECIPES</h1>
      {
      data?
      <div className="p-2">
      <DataTable
      columns={colData}
      data={data}
      pagination
      dense
      highlightOnHover
      /></div>:<img src="loader.gif" alt=""/>
    }
    </div>
  )
}

export default App