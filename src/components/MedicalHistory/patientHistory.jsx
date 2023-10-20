import React, { useEffect, useState } from 'react'
import axios from "axios";
import cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import { useParams } from 'react-router-dom';
import MedicalHistory from './MedicalHistory'
let DBRUL = process.env.REACT_APP_BASE_URL;


export default function OneHistory() {

    // const [patientHistory, setPatientHistory] = useState(null)

    let params = useParams()

    async function fetchOneHistory() {

        try {
            let token = cookie.load("auth");
            const payload = await jwtDecode(token);

            let history = await axios.get(
                `${DBRUL}/physician/${payload.username}/patients/${params.patientUN}/disease`,
                {
                    headers: {Authorization: `Bearer ${token}`},
                }
                );
                console.log("from get one patient history", history.data);
                // setPatientHistory(history.data);
                console.log(history, "from history function");

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchOneHistory()

    }, [])


  return (
    <div>
      <MedicalHistory />
    </div>
  )
}


