import { Grid } from '@mui/material'
import { GraficaUnoPlana } from '../../../../Elements/Graficas/Grafica_plana_uno'
import { GraficaDosCircular } from '../../../../Elements/Graficas/Gradica_circular_dos'

export const ResumenEstadisticoScreen = () => {


    return (
        <Grid
            container
            sx={{
                position: 'relative',
                background: '#FAFAFA',
                borderRadius: '15px',
                p: '20px',
                mb: '20px',
                boxShadow: '0px 3px 6px #042F4A26',
            }}
        >


            <GraficaUnoPlana titulo={"Reportes uno"} />

            <GraficaDosCircular titulo={"Reportes dos "} />

            <GraficaUnoPlana titulo={"Reportes uno"} />

            <GraficaDosCircular titulo={"Reportes dos "} />

        </Grid>
    )
}

