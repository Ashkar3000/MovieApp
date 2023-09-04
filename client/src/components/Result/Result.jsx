/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Result.css'
import axios from 'axios'

export default function Result({result ,openDetails}) {
const [title, setTitle] = useState({})
const handleData = (id) =>{
  axios(' http://www.omdbapi.com/?i='+id+'&apikey=e6c0d85b').then(({data}) => {
    let result = data;
    setTitle(result)
    alert(id)
  }).catch((err) => {
    
  });
}
  return (
    <div className='result rounded' onClick={e => openDetails(result.imdbID)} >
   <div className='border border-white border-4 rounded'>
   <img src={result.Poster} alt="" />
   </div>
      <div className='p-2 rounded'>
      <span className='span1'>{result.Title}</span>
      <br />
      <span className='span2'>{result.Year}</span>
      </div><br />
    </div>
  )
}
