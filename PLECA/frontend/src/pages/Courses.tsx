import { Grid, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";

const courses = [
  { title: "Java Fundamentals", description: "OOP, Collections, Streams, and testing.", level: "Beginner" as const },
  { title: "Spring Boot APIs", description: "REST, JPA, Security & JWT in practice.", level: "Intermediate" as const },
  { title: "Data Structures", description: "Master trees, graphs, DP with problems.", level: "Advanced" as const },
  { title: "React + TS", description: "Modern React, hooks, state, and routing.", level: "Intermediate" as const },
];

export default function Courses() {
  return (
    <>
      <Typography variant="h4" fontWeight={900} gutterBottom className="gradient-text">Courses</Typography>
      <Grid container spacing={2}>
        {courses.map((c) => (
          <Grid key={c.title} item xs={12} md={6} lg={4}>
            <CourseCard {...c} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
