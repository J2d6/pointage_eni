import { PointageWithCours, Tables } from "@/services/db_services/supabase";

import { ChartData } from 'chart.js';


 export  type TransformedPointageResult = {
    [courseName: string]: {
      retard: number;
      present: number;
      absent: number;
      nombreCours : number
    };
  };
  export function transformPointageResults(results: PointageWithCours[]): TransformedPointageResult {
    return results.reduce<TransformedPointageResult>((acc, pointage) => {
      const courseName = pointage.cours?.nom_cours ?? "Unknown Course";
      
      
      if (!acc[courseName]) {
        acc[courseName] = { retard: 0, present: 0, absent: 0, nombreCours: 0 }; 
      }
  
      
      acc[courseName].nombreCours++;
  
     
      if (pointage.retard) {
        acc[courseName].retard++;
      }
  
      if (pointage.statut_presence) {
        acc[courseName].present++;
      } else {
        acc[courseName].absent++;
      }
  
      return acc;
    }, {});
  }
  export function prepareChartData(statisticData: TransformedPointageResult): ChartData<'bar'> {
    const labels = Object.keys(statisticData);
    const presenceData = labels.map(courseName => {
        const data = statisticData[courseName];
        const totalCourses = data.present + data.absent; // Total des cours pour calculer le taux de présence
        return totalCourses ? (data.present / totalCourses) * 100 : 0; // Taux de présence
    });

    // Fonction pour déterminer la couleur en fonction du taux de présence
    const backgroundColors = presenceData.map(rate => {
        if (rate > 75) {
            return 'rgba(75, 192, 192, 0.5)'; // Couleur pour plus de 75%
        } else if (rate > 50) {
            return 'rgba(255, 206, 86, 0.5)'; // Couleur pour plus de 50%
        } else if (rate > 25) {
            return 'rgba(255, 99, 132, 0.5)'; // Couleur pour plus de 25%
        } else {
            return 'rgba(255, 99, 132, 0.2)'; // Couleur pour 25% ou moins
        }
    });

    return {
        labels: labels,
        datasets: [
            {
                label: 'Taux de Présence (%)',
                data: presenceData,
                backgroundColor: backgroundColors, // Utiliser le tableau de couleurs ici
                borderColor: backgroundColors.map(color => color.replace('0.5', '1')), // Couleurs de bordure
                borderWidth: 1,
            },
        ],
    };
}


export interface AttendanceSummary {
    present: number;
    absent: number;
    tardy: number;
    totalCourses: number; // Nouvelle propriété pour le total des cours
}

export function transformAttendanceResults(results: PointageWithCours[]): AttendanceSummary {
    return results.reduce<AttendanceSummary>(
        (acc, pointage) => {
            acc.totalCourses++; // Incrémente le nombre total de cours

            if (pointage.statut_presence) {
                acc.present++;
            } else {
                acc.absent++;
            }

            if (pointage.retard) {
                acc.tardy++;
            }

            return acc;
        },
        { present: 0, absent: 0, tardy: 0, totalCourses: 0 } // Initialisation
    );
}
