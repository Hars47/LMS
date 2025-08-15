import { Paper, Box, Typography, Button, Chip } from "@mui/material";

export default function CourseCard({
  title, description, level
}: { title: string; description: string; level: "Beginner"|"Intermediate"|"Advanced" }) {
  return (
    <Paper elevation={0} className="glass" sx={{ p: 2.5, height: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="start" mb={1}>
        <Typography variant="h6" fontWeight={700}>{title}</Typography>
        <Chip label={level} color={level === "Advanced" ? "secondary" : "primary"} size="small" />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Button variant="contained">Continue</Button>
    </Paper>
  );
}
