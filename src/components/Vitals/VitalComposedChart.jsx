import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function VitalComposedChart({ data }) {
    return (
        <>
            <ResponsiveContainer width='45%' height='80%' >
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="systolicBP" fill="#1F485B" stroke="#57A3C6" />

                    <Line type="monotone" dataKey="diastolicBP" stroke="#ff7300" />
                    {/* <Line type="monotone" dataKey="bloodGlucose" stroke="#ff7300" /> */}
                    <Bar dataKey="bloodGlucose" barSize={30} fill="#112731" />
                </ComposedChart>
            </ResponsiveContainer  >
            <ResponsiveContainer width='45%' height='80%' >
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="temperature" fill="#1F485B" stroke="#57A3C6" />
                    <Line type="monotone" dataKey="oxygenSat" stroke="#ff7300" />
                    <Bar dataKey="heartRate" barSize={30} fill="#112731" />
                </ComposedChart>

            </ResponsiveContainer  >
        </>
    )
}
