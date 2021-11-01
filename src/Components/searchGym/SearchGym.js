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

    const [gymId, setGymId] = useState();
    const [trainerId, setTrainerId] = useState();

    const [gymData, setGymData] = useState();
    const [trainerData, setTrainerData] = useState();

    useEffect(() => {
        axios
            .get(`https://amankothari.pythonanywhere.com/gym/`,
                /*{
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }*/
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
                /*{
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }*/
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

    }, [gymId]);

    //setGyms({ label: 'The Shawshank Redemption', year: 1994 })

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <>
            <div className="search">
                <br/>
                <div className="search__head">
                <h1>{trainerId}</h1>
                    <h2>Search your dream gym</h2>
                </div>
                <br/>
                <form className="search__form" onSubmit={handleSubmit}>
                    {gyms && 
                        <div className="search__form__dropdown">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={gymId}
                                onChange={(e) => {setGymId(e.target.value)}}
                                options={gyms.map((gym) => gym.name)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Select Gym" />}
                            />
                        </div>
                    }
                    <br/>   
                    {gymId && 
                        <div className="search__form__dropdown">
                            <Card gym={gymData}/>
                        </div>
                    }
                    <br/>
                    {trainers &&
                        <div className="search__form__dropdown">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={trainerId}
                                onChange={(e) => {setTrainerId(e.target.value)}}
                                options={trainers.map((trainer) => trainer.name)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Select Trainer" />}
                            />
                        </div>
                    }
                    <br/>
                    {trainerId &&
                        <div className="search__form__dropdown">
                            <Card trainer={trainerData} />
                        </div>
                    }

                    <br/>
                    
                    <Button variant="contained">Enroll</Button>
                </form>
            </div>
        </>
    )
};
export default SearchGym;
