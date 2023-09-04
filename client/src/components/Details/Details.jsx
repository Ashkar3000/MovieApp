/* eslint-disable react/prop-types */
// import React from 'react'

import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import './Details.css'

export default function Details({selected ,close}) {
  const navigate = useNavigate();

  const playlist = () =>{
    navigate('/playlist')
  }
  return (
    <div className="d-flex flex-column justify-content-center align-item-center">
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center movie-poster">
            <img src={selected.Poster} alt="" className="img"/>
          </div>
          <div className="col-12 col-md-6 text-white">
          <h3 className="movietitle">{selected.Title}</h3>
            <ul className="movie-misc-info">
              <li className="year mx-2"><strong>Year: </strong>{selected.Year }</li>
              <li className="rated mx-2"><strong>Ratings:</strong>{selected.Rated }</li>
              <li className="released"><strong>Released:</strong>{selected.Released }</li>
            </ul>
            <p className="genre"><strong>Genre :</strong> {selected.Genre }</p>
            <p className="writer"><strong>Writer :</strong> {selected.Writer }</p>
            <p className="actors"><strong>Actors : </strong>{selected.Actors }</p>
            <p className="plot"><strong>Plot :</strong> {selected.Plot }</p>
            <p className="language"><strong>Language :</strong> {selected.Language }</p>
            <p className="awards"><strong>Awards :</strong> {selected.Awards }</p>
            <div>
            <button className="button2" onClick={playlist}>Add Watch list</button>
            <button className="button2 mx-2" onClick={close}>Back to Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
