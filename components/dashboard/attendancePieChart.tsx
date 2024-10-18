'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { transformAttendanceResults, AttendanceSummary } from '@/lib/dashboard'; 
import { getPointagesForEleveAndProf } from '@/services/db_services/pointage'; 

// Enregistrement des composants Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface AttendancePieChartProps {
    idEleve: number;
    idProf: number;
}

export default function AttendancePieChart({ idEleve, idProf }: AttendancePieChartProps) {
    const [attendanceData, setAttendanceData] = useState<AttendanceSummary | null>(null);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const pointageList = await getPointagesForEleveAndProf(idEleve, idProf);
                const transformedData = transformAttendanceResults(pointageList);
                setAttendanceData(transformedData);
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la récupération des données d'attendance.");
            }
        };

        fetchAttendanceData();
    }, [idEleve, idProf]);

    // Préparation des données pour le pie chart
    const chartData = {
        labels: ['Présent', 'Absent', 'En Retard'],
        datasets: [
            {
                data: [
                    attendanceData?.present || 0,
                    attendanceData?.absent || 0,
                    attendanceData?.tardy || 0,
                ],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            },
        ],
    };

    return (
        <div className={` border-blue-600 h-full p-4 flex justify-center items-center`}>
            {attendanceData ? (
                <Pie data={chartData} />
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
}
