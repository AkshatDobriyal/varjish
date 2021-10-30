import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import SelectSearch from 'react-select-search';
//import { useSelect } from 'react-select-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchGym = () => {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 }
    ];

    return(
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    )
};
export default SearchGym;