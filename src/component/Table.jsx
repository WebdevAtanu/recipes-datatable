import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


function App() {
  const [data,setData]=useState([]);
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
    <div id='table'>
      <h1 className='text-center text-3xl text-red-500 m-5'>RECIPES</h1>
      {
      data?
      <DataTable
      columns={colData}
      data={data}
      pagination
      dense
      highlightOnHover
      />:<img src="loader.gif" alt=""/>
    }
    </div>
  )
}

export default App