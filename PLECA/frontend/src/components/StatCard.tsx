import { Paper, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function StatCard({
  title, value, icon, caption
}: { title: string; value: string | number; icon?: ReactNode; caption?: string }) {
  return (
    <Paper elevation={0} className="glass" sx={{ p: 2.5 }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Box sx={{
          width: 50, height: 50, borderRadius: 2,
          background: "linear-gradient(135deg, rgba(124,58,237,.25), rgba(14,165,233,.25))",
          display: "grid", placeItems: "center"
        }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="overline" color="text.secondary">{title}</Typography>
          <Typography variant="h5" fontWeight={800}>{value}</Typography>
          {caption && <Typography variant="caption" color="text.secondary">{caption}</Typography>}
        </Box>
      </Box>
    </Paper>
  );
}
