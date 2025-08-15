import { Box, Grid, Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Analytics() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={900} gutterBottom className="gradient-text">Analytics</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={0} className="glass" sx={{ p: 2 }}>
            <Typography variant="subtitle1" color="text.secondary" mb={1}>Scores over time</Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
              series={[{ data: [60, 64, 68, 74, 77, 80, 86] }]}
              height={320}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className="glass" sx={{ p: 2, height: "100%" }}>
            <Typography variant="subtitle1" color="text.secondary">Highlights</Typography>
            <ul>
              <li>↑ Retention improved 12% MoM</li>
              <li>↑ Average quiz score +8</li>
              <li>↓ Drop-off on Day 3</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
