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
    const [loadInformation, setLoadInformation] = useState(false);

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


    // loading of data function
    function loadData () {

        if( loadInformation === false){
            setLoadInformation(true);

        } else{
            setLoadInformation(false)
        }
        console.log(loadInformation);

    }

    // deleting the final column


    // adding to the final column


    return (

        <section>
            <div>
                <h1>Working</h1>
                <button onClick= {loadData} >Load Data</button>
                <button>Delete Data</button>
                <button>Add Data</button>

                {<div> 
                        {
                            loadInformation === false
                            ?
                            (
                                <div> </div>
                            )
                            :
                            (
                                <div>  
                                {
                                    universities.map((r) =>
                                                                                                
                                    <div key={r.name}> 
                                    <p>{r.alpha_two_code}</p>
                                    <p>{r.country}</p>
                                    <p>{r.name}</p>
                                    <p>{r.domains[0]}</p>
                                    <p>{r.web_pages[0]}</p>
                                    </div>
                                    )
                                }
                            
                                </div>

                            )

                        }
               


                </div> 
                
                }

            </div>
        </section>
    )



}