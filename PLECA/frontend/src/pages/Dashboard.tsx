import { Box, Grid, Typography, Paper } from "@mui/material";
import StatCard from "../components/StatCard";
import { TrendingUp, AutoGraph, WorkspacePremium, AccessTime } from "@mui/icons-material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        <span className="gradient-text">Dashboard</span>
      </Typography>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={3}>
          <StatCard title="Active Courses" value={6} icon={<AutoGraph />} caption="+2 this week" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Completion" value="72%" icon={<TrendingUp />} caption="Up 8% vs last month" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Badges" value={14} icon={<WorkspacePremium />} caption="3 new badges" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Study Time" value="12h 40m" icon={<AccessTime />} caption="This week" />
        </Grid>
      </Grid>

      <Paper elevation={0} className="glass" sx={{ p: 2 }}>
        <Typography variant="subtitle1" color="text.secondary" mb={1}>Weekly Progress</Typography>
        <LineChart
          xAxis={[{ scaleType: "point", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] }]}
          series={[{ data: [2, 3, 3.5, 4, 4.5, 5.5, 6.5] }]}
          height={280}
        />
      </Paper>
    </Box>
  );
}
