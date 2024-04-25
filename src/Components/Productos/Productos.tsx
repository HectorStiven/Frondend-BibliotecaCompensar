/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import { Box, Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { SolicitudesFinalizadas } from './SolicitudesFinalizadasC/SolicitudesFinalizadas';
import { SolicitudesActivas } from './SolicitudesActivasC/SolicitudesActivasc';
import { SolicitaLibro } from './SolicitaLibroC/SolicitaLibro';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Productos: React.FC = () => {
  const [position_tab, setPositionTab] = useState("1");

  const handleTablistChange = (event: React.SyntheticEvent, newValue: string) => {
    setPositionTab(newValue);
  };

  return (
    <>
      <Grid
        container
        sx={{
          position: 'relative',
          background: '#FAFAFA',
          borderRadius: '15px',
          p: '20px',
          mb: '20px',
          boxShadow: '0px 3px 6px #042F4A26'
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{ mt: '20px' }}
          >
            <TabContext value={position_tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleTablistChange}>                 
                 <Tab label="Solicitar" value="1"    sx={{marginRight:"20%" }} />
                  <Tab label="Solicitudes Activas Cartera" value="2"  sx={{marginRight:"20%" }} />
                  <Tab label="Solicitudes Finalizadas " value="3"  sx={{marginRight:"20%" }} />

                </TabList>
              </Box>

              <TabPanel value="1" sx={{ p: '20px 0' }}>
                <SolicitaLibro/>
              </TabPanel>

              <TabPanel value="2" sx={{ p: '20px 0' }}>
                <SolicitudesActivas/>
              </TabPanel>
              <TabPanel value="3" sx={{ p: '20px 0' }}>
               <SolicitudesFinalizadas/>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
