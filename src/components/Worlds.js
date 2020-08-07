import React, {useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import World from './World';

const fetchWorlds = async (key, page) => {
    const WORLDS_URL = `https://swapi.dev/api/planets/?page=${page}`;
    const res = await axios.get(WORLDS_URL).catch(err => alert(err));
    return res.data;
}

const Worlds = () => {
    const [page, setPage] = useState(1);
    const {data, status} = useQuery(['worlds', page], fetchWorlds, {
        staleTime: 10000,
        cacheTime: 60000,
        onSuccess: () => console.log('success')
    });

    const handleNextPage = () => {
        if (page < 6) setPage(prevPage => prevPage += 1);
    }

    const handlePreviousPage = () => {
        if (page > 1) setPage(prevPage => prevPage -= 1);
    }

    return (
        <div>
            <h2 className="subtitle">Explore the worlds</h2>
            <div className="btns">
                <button className={page === 1 ? "page-btn disabled" : "page-btn"} onClick={handlePreviousPage}>Previous</button>
                <button className={page === 6 ? "page-btn disabled" : "page-btn"} onClick={handleNextPage}>Next</button>
            </div>
            {status === 'loading' && <div className="status-msg">Loading...</div>}
            {status === 'error' && <div className="status-msg">Ooops! Something didn't go according to the plan.</div>}
            {status === 'success' && (
                <div className="data">
                    {data.results.map(world => <World world={world} key={world.name}/>)}
                </div>
            )}
        </div>
    )
}

export default Worlds
