import { Grid, TextField } from "@material-ui/core";

export const Inicio = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15, width: "90%" }}
          size="small"
          variant="outlined"
          label="Tipo de Documento"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15, width: "90%" }}
          size="small"
          variant="outlined"
          label="Número de Documento"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15, width: "90%" }}
          size="small"
          variant="outlined"
          label="Nombre"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15, width: "90%" }}
          size="small"
          variant="outlined"
          label="Edad"
          type="number"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15, width: "90%" }}
          size="small"
          variant="outlined"
          label="Correo Electrónico"
          type="email"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15, width: "90%" }}
          size="small"
          variant="outlined"
          label="Dirección"
          value=""
        />
      </Grid>
    </Grid>
  );
};
