import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import SelectSearch from 'react-select-search';
//import { useSelect } from 'react-select-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Card from './Card';
import './SearchGym.scss';

const SearchGym = () => {
    
    let token = localStorage.getItem("token");

    const [gyms, setGyms] = useState();
    const [trainers, setTrainers] = useState();

    const [gym, setGym] = useState();
    const [trainer, setTrainer] = useState();

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
                    setTrainers(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        console.log(trainers);

    }, [gym]);

    //setGyms({ label: 'The Shawshank Redemption', year: 1994 })

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <>
            <div className="container">
                <div className="head">
                    <h2>Search your dream gym</h2>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={gym}
                            onChange={(e) => {setGym(e.target.value)}}
                            options={gyms}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>
                    {gym && <Card gym={gym}/>}
                    {trainers &&
                        <div className="form-control">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={trainer}
                                onChange={(e) => {setTrainer(e.target.value)}}
                                options={trainers}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Movie" />}
                            />
                        </div>
                    }
                    {trainer && <Card trainer={trainer} />}

                    <Button variant="contained">Enroll</Button>
                </form>
            </div>
        </>
    )
};
export default SearchGym;
