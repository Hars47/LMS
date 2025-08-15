import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItemButton,
  ListItemIcon, ListItemText, Avatar, Divider, Tooltip, useMediaQuery, Button
} from "@mui/material";
import { Dashboard, LibraryBooks, Insights, Notifications, Person, Menu, Logout } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useAppDispatch } from "../store/store";
import { logout } from "../store/authSlice";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <Dashboard /> },
  { to: "/courses", label: "Courses", icon: <LibraryBooks /> },
  { to: "/analytics", label: "Analytics", icon: <Insights /> },
  { to: "/notifications", label: "Notifications", icon: <Notifications /> },
  { to: "/profile", label: "Profile", icon: <Person /> },
];

export default function AppLayout() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const DrawerContent = (
    <Box sx={{ width: 260, p: 1 }}>
      <Box display="flex" alignItems="center" gap={1.5} p={2}>
        <Avatar sx={{ bgcolor: "primary.main", boxShadow: 2 }}>PL</Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight={800}>PLECA</Typography>
          <Typography variant="caption" color="text.secondary">Learning Ecosystem</Typography>
        </Box>
      </Box>
      <Divider />
      <List sx={{ mt: 1 }}>
        {navItems.map((item) => {
          const active = pathname === item.to;
          return (
            <ListItemButton
              key={item.to}
              component={Link}
              to={item.to}
              selected={active}
              sx={{
                my: 0.5,
                borderRadius: 2,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "#fff",
                  "& .MuiListItemIcon-root": { color: "#fff" },
                  "&:hover": { bgcolor: "primary.main" },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
      <Divider sx={{ my: 1.5 }} />
      <Button
        fullWidth
        variant="outlined"
        startIcon={<Logout />}
        onClick={() => { dispatch(logout()); navigate("/login"); }}
      >
        Logout
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar position="fixed" color="transparent" enableColorOnDark sx={{ backdropFilter: "blur(8px)", bgcolor: "rgba(0,0,0,0.35)" }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)} edge="start" sx={{ mr: 1 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <span className="gradient-text">Personalized Learning Ecosystem</span>
          </Typography>
          <Tooltip title="Your profile">
            <Avatar sx={{ bgcolor: "secondary.main", boxShadow: 2 }}>U</Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      {isSm ? (
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)} variant="temporary">
          {DrawerContent}
        </Drawer>
      ) : (
        <Drawer open={open} variant="persistent">
          {DrawerContent}
        </Drawer>
      )}

      {/* Main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, pl: open && !isSm ? 4 : 2 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
