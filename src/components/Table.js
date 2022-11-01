import { useState, useEffect } from "react";
import { useCallback } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import '../App.css';

// const BASE_URL
// hi aiman hey
// you just broke my code gurl
// fixed again
// hi gurl
// I miss ur smelly hair

const BASE_URL = 'http://universities.hipolabs.com/search?country=Australia'

export const Table = () => {
    // set states 
    const [universities, setUniversities] = useState({});

    useEffect(() => {
        const fetchData = () => {
            axios.get(`${BASE_URL}`)
                .then(res => {
                    console.log('this should have the data:', res.data)
                    setUniversities(res.data)
                })
                .catch(err => {
                    console.warn(err)
                })
        }

        fetchData()

        console.log('universities', universities);


    }, []);


    // loading of data


    // deleting the final column


    // adding to the final column


    return (

        <section>
            <div>
                <h1>Working</h1>
            </div>
        </section>
    )



}