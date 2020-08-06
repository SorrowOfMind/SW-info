import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import World from './World';

const fetchWorlds = async () => {
    const WORLDS_URL = "https://swapi.dev/api/planets/";
    const res = await axios.get(WORLDS_URL).catch(err => alert(err));
    return res.data;
}

const Worlds = () => {
    const {data, status} = useQuery('worlds', fetchWorlds);

    return (
        <div>
            <h2 className="subtitle">Explore the worlds</h2>
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
