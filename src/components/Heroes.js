import React, {useState} from 'react';
import {usePaginatedQuery} from 'react-query';
import axios from 'axios';
import Hero from './Hero';

const fetchHeroes = async (key, page) => {
    const HEROES_URL = `https://swapi.dev/api/people/?page=${page}`;
    const res = await axios.get(HEROES_URL);
    return res.data;
}

const Heroes = () => {
    const [page, setPage] = useState(1);
    const {resolvedData, latestData, status} = usePaginatedQuery(['heroes', page], fetchHeroes, {
        staleTime: 10000,
        cacheTime: 60000
    });
    
    const handlePreviousPage = () => setPage(prevPage => Math.max(prevPage -= 1, 1));
    const handleNextPage = () => setPage(prevPage => (!latestData || !latestData.next ? prevPage : prevPage += 1));

    return (
        <div>
            <h2 className="subtitle">Meet your heroes & villians</h2>
            <div className="btns">
                <button className={page === 1 ? "page-btn disabled" : "page-btn"} onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <span className="page-num">{page}</span>
                <button className={page === 6 ? "page-btn disabled" : "page-btn"} onClick={handleNextPage} disabled={!latestData || !latestData.next}>Next</button>
            </div>
            {status === 'loading' && <div className="status-msg">Loading...</div>}
            {status === 'error' && <div className="status-msg">Ooops! Something didn't go according to the plan.</div>}
            {status === 'success' && (
                <div className="data">
                    {resolvedData.results.map(hero => <Hero hero={hero} key={hero.name}/>)}
                </div>
            )}
        </div>
    )
}

export default Heroes
