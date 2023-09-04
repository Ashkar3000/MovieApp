import { useState } from 'react';
import './Banner.css';
import axios from 'axios';
import Result from '../Result/Result';
import Details from '../Details/Details';

export default function HeroBanner() {
    const [searching, setSearching] = useState({
        search: '',
        results: [],
        selected: {}
    });

    const handleInput = (e) => {
        let search = e.target.value;
        setSearching((prevState) => {
            return { ...prevState, search: search };
        });
    };

    const openDetails = (id) => {
        axios.get(' http://www.omdbapi.com/?i=' + id + '&apikey=e6c0d85b')
            .then(({ data }) => {
                setSearching((prevState) => { return { ...prevState, selected: data }})
            }).catch(err => console.log(err));
    }

    const searchResult = (e) => {
        if ((e.key === "Enter" || e.type === "click") && searching.search.trim() !== "") {
            axios.get(`http://www.omdbapi.com/?apikey=e6c0d85b&s=${searching.search}`)
                .then(res => {
                    // console.log(res.data); // Log the response data
                    setSearching((prevState) => {
                        return { ...prevState, results: res.data.Search };
                    });
                })
                .catch(err => console.log(err));
        }
    };

    const close = () =>{
        setSearching((prevState) => { return { ...prevState, selected: {}}})         
    }

    return (
        <div className="heroBanner" style={{ marginTop: '80px', padding: '20px' }}>
            {typeof searching.selected.Title != "undefined" ? <Details selected={searching.selected} close ={close}/> :
            <><div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">
                        Explore millions of movies and TV shows in MoviezApp.................
                    </span>
                    <div className="searchInput mt-3 mb-5">
                        <input
                            type="text"
                            placeholder="Search for Movies and TV shows............ "
                            className='input w-50 p-2'
                            value={searching.search}
                            onChange={handleInput}
                            onKeyDown={searchResult} />
                        <button
                            type='button'
                            className='button'
                            onClick={searchResult}>
                            Search
                        </button>
                    </div>
                </div>
                {searching.results.length > 0 ? (
                    <div className="container">
                        <div className="row">
                            {searching.results.map((result) => (
                                <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={result.imdbID}>
                                    <Result result={result} openDetails={openDetails} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <img src="/no-results.png" alt="No Movie Found" className='no-results' />
                        <p className='text'>No movies found.</p>
                    </div>
                )}
                    </>
}
        </div>
    );
}
