import React from 'react'
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import tinycolor from 'tinycolor2';

export default function PresPieChart({ data }) {
    const baseColor = "#1F485B"; // The base color
    const baseColor2 = "#10B981"; // The base color
//   const darkestShade = tinycolor(baseColor).darken(20).toString(); // The darkest shade
//   const lightestShade = tinycolor(baseColor).lighten(20).toString(); // The lightest shade
    const allMedicines = data.reduce((acc, curr) => {
        return acc.concat(curr.medicines.map((medicine) => medicine.drugname));
    }, []);

    const medicineCount = allMedicines.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
    }, {});

    const totalMedicines = allMedicines.length;
    const chartData = Object.keys(medicineCount).map((medicine) => {
        const percentage = ((medicineCount[medicine] / totalMedicines) * 100).toFixed(2);
        return { name: medicine, value: parseFloat(percentage) };
    });
    const allDiagnoses = data.map((item) => item.diagnosis);

    const diagnosisCount = allDiagnoses.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
    }, {});

    const totalDiagnoses = allDiagnoses.length;
    const chartData2 = Object.keys(diagnosisCount).map((diagnosis) => {
        const percentage = ((diagnosisCount[diagnosis] / totalDiagnoses) * 100).toFixed(2);
        return { name: diagnosis, value: parseFloat(percentage) };
    });
    return (
        <>
            <ResponsiveContainer width="30%" height={400}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#10B981"
                        label
                    >
                        {chartData.map((entry, index) => {
            const color = tinycolor(baseColor2).lighten(index * 5).toString();
            return <Cell key={`cell-${index}`} fill={color} />;
          })}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="30%" height={400}>
                <PieChart>
                    <Pie
                        data={chartData2}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label
                    >
                        {chartData.map((entry, index) => {
            const color = tinycolor(baseColor).lighten(index * 5).toString();
            return <Cell key={`cell-${index}`} fill={color} />;
          })}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}



// export function DiagnosisPieChart({ data }) {
//     const allDiagnoses = data.map((item) => item.diagnosis);

//     const diagnosisCount = allDiagnoses.reduce((acc, curr) => {
//         acc[curr] ? acc[curr]++ : (acc[curr] = 1);
//         return acc;
//     }, {});

//     const totalDiagnoses = allDiagnoses.length;
//     const chartData = Object.keys(diagnosisCount).map((diagnosis) => {
//         const percentage = ((diagnosisCount[diagnosis] / totalDiagnoses) * 100).toFixed(2);
//         return { name: diagnosis, value: parseFloat(percentage) };
//     });

//     return (
    
//   );
// }