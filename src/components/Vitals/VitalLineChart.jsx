import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function VitalLineChart({ data }) {
    return (
        <>
            <ResponsiveContainer width='45%' height='80%' >
                <LineChart data={data}>


                    <Line type="monotone" dataKey="systolicBP" stroke="#713ABE" strokeWidth={3} />
                    <Line type="monotone" dataKey="diastolicBP" stroke="#E5CFF7" strokeWidth={3} />
                    <Line type="monotone" dataKey="bloodGlucose" stroke="#3D0C11" strokeWidth={3} />
                    <CartesianGrid />
                    <YAxis />
                    <XAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer  >
            <ResponsiveContainer width='45%' height='80%' >
                <LineChart data={data}>
                    <Line type="monotone" dataKey="heartRate" stroke="#FF6969" strokeWidth={3} />
                    <Line type="monotone" dataKey="oxygenSat" stroke="#6499E9" strokeWidth={3} />
                    <Line type="monotone" dataKey="temperature" stroke="#E9B824" strokeWidth={3} />

                    <CartesianGrid />
                    <YAxis />
                    <XAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>

            </ResponsiveContainer  >
        </>
    )
}
