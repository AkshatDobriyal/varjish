import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import SelectSearch from 'react-select-search';
//import { useSelect } from 'react-select-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import GymCard from './GymCard';
import TrainerCard from './TrainerCard';
import Select from '@mui/material/Select';
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
            <div className="search">
                <br/>
                <div className="search__head">
                    <h2>Search your dream gym</h2>
                </div>
                <br/>
                <form className="search__form" onSubmit={handleSubmit}>
                    {gyms && 
                        <div className="search__form__dropdown">
                            <select
                                name="gym"
                                label="gym"
                                id="gym"
                                onChange={(e) => {
                                    setGymId(e.target.value);
                                    console.log(e.target.value)
                                }}
                            >
                                <option value="Choose Gym">
                                    Choose
                                </option>

                                {gyms.map((gym) => {
                                    return (
                                        <option key={gym.id} value={gym.id}>
                                            {gym.name}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <select
                                name="trainer"
                                label="trainer"
                                id="trainer"
                                onChange={(e) => {
                                    setTrainerId(e.target.value);
                                    console.log(e.target.value)
                                }}
                            >
                                <option value="Choose Trainer">
                                    Choose
                                </option>

                                {trainers.map((trainer) => {
                                    return (
                                        <option key={trainer.trainer} value={trainer.trainer}>
                                            {trainer.firstname} {trainer.lastname}
                                        </option>
                                    );
                                })}
                            </select>
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
                </form>
            </div>
        </>
    )
};
export default SearchGym;
