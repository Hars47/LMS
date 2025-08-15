import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={900} gutterBottom className="gradient-text">Profile</Typography>
      <Paper elevation={0} className="glass" sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField label="Full name" fullWidth defaultValue="Learner One" /></Grid>
          <Grid item xs={12} md={6}><TextField label="Email" fullWidth defaultValue="learner@example.com" /></Grid>
          <Grid item xs={12} md={6}><TextField label="Role" fullWidth defaultValue="Student" /></Grid>
          <Grid item xs={12} md={6}><TextField label="Timezone" fullWidth defaultValue="IST (+5:30)" /></Grid>
          <Grid item xs={12}><TextField label="Bio" fullWidth multiline minRows={3} placeholder="Tell us about your goals…" /></Grid>
          <Grid item xs={12}><Button variant="contained">Save changes</Button></Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
