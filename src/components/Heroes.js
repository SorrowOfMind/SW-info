import React, {useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Hero from './Hero';

const fetchHeroes = async (key, page) => {
    const HEROES_URL = `https://swapi.dev/api/people/?page=${page}`;
    const res = await axios.get(HEROES_URL);
    return res.data;
}

const Heroes = () => {
    const [page, setPage] = useState(1);
    const {data, status} = useQuery(['heroes', page], fetchHeroes, {
        staleTime: 10000,
        cacheTime: 60000
    });
    
    const handleNextPage = () => {
        if (page < 6) setPage(prevPage => prevPage += 1);
    }

    const handlePreviousPage = () => {
        if (page > 1) setPage(prevPage => prevPage -= 1);
    }

    return (
        <div>
            <h2 className="subtitle">Meet your heroes & villians</h2>
            <div className="btns">
                <button className={page === 1 ? "page-btn disabled" : "page-btn"} onClick={handlePreviousPage}>Previous</button>
                <button className={page === 6 ? "page-btn disabled" : "page-btn"} onClick={handleNextPage}>Next</button>
            </div>
            {status === 'loading' && <div className="status-msg">Loading...</div>}
            {status === 'error' && <div className="status-msg">Ooops! Something didn't go according to the plan.</div>}
            {status === 'success' && (
                <div className="data">
                    {data.results.map(hero => <Hero hero={hero} key={hero.name}/>)}
                </div>
            )}
        </div>
    )
}

export default Heroes
