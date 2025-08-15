import { Box, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

export default function Notifications() {
  const items = [
    { title: "Course Recommendation", desc: "We think you'll enjoy 'Spring Boot Deep Dive'." },
    { title: "New Badge", desc: "You unlocked 'Consistency Champion'!" },
    { title: "Reminder", desc: "Data Structures practice session tonight at 8 PM." },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight={900} gutterBottom className="gradient-text">Notifications</Typography>
      <Paper elevation={0} className="glass" sx={{ p: 1 }}>
        <List>
          {items.map((i) => (
            <ListItem key={i.title} divider>
              <ListItemText
                primary={<Typography fontWeight={700}>{i.title}</Typography>}
                secondary={i.desc}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
