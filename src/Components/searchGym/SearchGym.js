import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import SelectSearch from 'react-select-search';
//import { useSelect } from 'react-select-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import GymCard from './GymCard';
import TrainerCard from './TrainerCard';
import './SearchGym.scss';
import { Link } from 'react-router-dom';
import {useApp} from "../../Context/AppContext";
import { getToken, getRole } from '../../services/localStorageServices'

const SearchGym = () => {
    const {loggedInData}=useApp()
    console.log(loggedInData)

    const history = useHistory()

    const [gyms, setGyms] = useState([]);
    const [trainers, setTrainers] = useState([]);

    const [gymId, setGymId] = useState('');
    const [trainerId, setTrainerId] = useState('');

    const [gymData, setGymData] = useState({});
    const [trainerData, setTrainerData] = useState({});

    const token =  getToken();
    console.log("Token"+ localStorage.getItem('token'))

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let sendData = {
            trainer: trainerId,
            gym: gymId,
        }
        console.log("hereeeeee", sendData)
        axios
            .post("https://amankothari.pythonanywhere.com/trainee/", sendData,
                {
                    headers: {
                        Authorization: `Token ${getToken()}`
                    }
                })
            .then((res) => {
                history.push('/dashboard')
                console.log('api response', res)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        axios
            .get(`https://amankothari.pythonanywhere.com/gym/`,
                {
                    headers: {
                        Authorization: `Token ${getToken()}`
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


    }, []);
    console.log(gyms);

    console.log(gymId);
    useEffect(() => {
        
        axios
            .get(`https://amankothari.pythonanywhere.com/gym/${gymId}/`,
            {
                headers: {
                    Authorization: `Token ${getToken()}`
                }
            }
        )
            .then((res) => {
                if (res) {
                    setGymData(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        console.log(gymData);

    }, [gymId]);

    useEffect(() => {
        console.log(gymId);
        axios
            .get(`http://amankothari.pythonanywhere.com/trainerbygym/${gymId}/`,
                {
                    headers: {
                        Authorization: `Token ${getToken()}`
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

    }, [gymId]);
    console.log(trainers);

    useEffect(() => {
        axios
            .get(`https://amankothari.pythonanywhere.com/trainer/${trainerId}/`,
                {
                    headers: {
                        Authorization: `Token ${getToken()}`
                    }
                }
        )
            .then((res) => {
                if (res) {
                    setTrainerData(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }, [trainerId]);
    console.log(trainerData);

    const role = getRole()
  

    return(
        <>
            <div className="search" id="search">
                <br/>
                <div className="search__head">
                    <h2>Search your dream gym</h2>
                </div>
                <br/>
                <form className="search__form" onSubmit={handleSubmit}>
                    {gyms && 
                        <div className="search__form__dropdown" id="search__form__dropdown">
                            <Box sx={{ minWidth: 220 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Gym</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gymId}
                                        label="Age"
                                        onChange={(e) => {
                                            setGymId(e.target.value);
                                            console.log(e.target.value)
                                        }}
                                    >
                                        {gyms.map((gym) => {
                                            return (
                                                <MenuItem key={gym.id} value={gym.id} id="selected_gym">
                                                    {gym.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    }
                    <br/>   
                    {gymId && 
                        <div className="search__form__dropdown">
                            <GymCard gym={gymData}/>
                        </div>
                    }
                    <br/>
                    {trainers &&
                        <div className="search__form__dropdown">
                            <Box sx={{ minWidth: 220 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Trainer</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-2"
                                        value={trainerId}
                                        label="Age"
                                        onChange={(e) => {
                                            setTrainerId(e.target.value);
                                            console.log(e.target.value)
                                        }}
                                    >
                                        {trainers.map((trainer) => {
                                            return (
                                                <MenuItem key={trainer.trainer} value={trainer.trainer} id="selected_trainer">
                                                    {trainer.firstname} {trainer.lastname}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    }
                    <br/>
                    {trainerId &&
                        <div className="search__form__dropdown">
                            <TrainerCard trainer={trainerData} />
                        </div>
                    }

                    <br/>
                    {gymData && trainerData && role==="TRAINEE" &&
                        <Button type="submit" variant="contained">Enroll</Button>
                    }
                    <br/>
                </form>
            </div>
        </>
    )
};
export default SearchGym;
