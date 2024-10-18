'use client'

import { prepareChartData, TransformedPointageResult, transformPointageResults } from "@/lib/dashboard";
import { getPointagesForEleveAndProf } from "@/services/db_services/pointage";
import { ChartData, Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import AttendancePieChart from "./attendancePieChart";

interface PresenceBarChartPerSubjectProps {
    idEleve: number,
    idProf: number
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PresenceBarChartPerSubject({
    idEleve,
    idProf
}: PresenceBarChartPerSubjectProps) {

    const [pointageData, setPointageData] = useState<TransformedPointageResult | null>(null);
    const [dataPrepared, setDataPrepared] = useState<ChartData<"bar"> | null>(null);

    useEffect(() => {
        const prepareData = async () => {
            try {
                const pointageList = await getPointagesForEleveAndProf(idEleve, idProf);
                const statisticData: TransformedPointageResult = transformPointageResults(pointageList);
                setPointageData(statisticData);

                const chartData = prepareChartData(statisticData);
                setDataPrepared(chartData);
            } catch (error) {
                console.error(error);
                alert("error eeeeeee");
            }
        };

        prepareData();
    }, [idEleve, idProf]);

    const chartOptions = {
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 10 
                }
            }
        }
    };

    return (
        <section className={`
             h-full border-green-600
            flex flex-col
            w-full
        `}>
            <div className={`
                flex flex-row justify-center items-center   
                h-24
                p-3
            `}>
                <h3 className="italic font-bold">TAUX DE PRESENCE A VOS COURS</h3>
            </div>
            <div className={`
                flex-1 border flex
                h-full
               
                overflow-hidden // Assurez-vous que tout débordement est masqué
            `}>
                <div className={`flex flex-row justify-between items-stretch w-full`}>
                    <div className={`flex-1 flex justify-center items-center p-2  `}>
                        {dataPrepared && <Bar data={dataPrepared} options={chartOptions} />}
                    </div>
                    <div className={`flex-1 flex justify-center items-center p-2`}>
                        <AttendancePieChart idEleve={idEleve} idProf={idProf} />
                    </div>
                </div>
            </div>
        </section>
    );
}
