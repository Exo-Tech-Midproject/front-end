import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function VitalBarChart({ data }) {
    return (

        <>
            <ResponsiveContainer width='45%' height='80%' debounce={50}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="systolicBP" fill="#8884d8" />
                    <Bar dataKey="diastolicBP" fill="#82ca9d" />
                    <Bar dataKey="bloodGlucose" fill="#B8621B" />

                </BarChart>
            </ResponsiveContainer  >
            <ResponsiveContainer width='45%' height='80%' debounce={50} >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="heartRate" fill="#B0578D" />
                    <Bar dataKey="oxygenSat" fill="#362FD9" />
                    <Bar dataKey="temperature" fill="#FFE4D6" />

                </BarChart>

            </ResponsiveContainer  >
        </>

    )
}
