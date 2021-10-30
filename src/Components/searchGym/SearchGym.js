import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import SelectSearch from 'react-select-search';
//import { useSelect } from 'react-select-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchGym = () => {
    
    let token = localStorage.getItem("token");

    const [gyms, setGyms] = useState();
    
    const [trainers, setTrainers] = useState();

    const [gymName, setGymName] = useState();
    const [gymDescription, setGymDescription] = useState();

    const [trainerName, setTrainerName] = useState();
    const [trainerDescription, setTrainerDescription] = useState();

    useEffect(() => {
        axios
            .get(``,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            )
            .then((res) => {
                if (res) {
                    setGyms(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        console.log(gyms);

    }, []);

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 }
    ];

    return(
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={gyms}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    )
};
export default SearchGym;
