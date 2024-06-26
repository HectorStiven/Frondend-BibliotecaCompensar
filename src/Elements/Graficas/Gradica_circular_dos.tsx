import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Grid } from '@mui/material';
import { Title } from '../Titulo/Titulo';

export const GraficaDosCircular = ({titulo}:any) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Grid container justifyContent="center" >
              <Grid item xs={12}>
                <Title title={titulo||""} />
            </Grid>

            <Grid item xs={8}>
                <Chart type="pie" data={chartData} options={chartOptions} />
            </Grid>
        </Grid>
    )
}
