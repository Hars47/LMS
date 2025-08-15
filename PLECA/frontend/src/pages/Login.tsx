import { useState } from "react";
import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { loginUser } from "../store/authSlice";
import { useAppDispatch } from "../store/store";
import AlertBar from "../components/AlertBar";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bar, setBar] = useState<{open:boolean; message:string; severity:"success"|"info"|"warning"|"error"}>({open:false, message:"", severity:"success"});

  const onSubmit = async () => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      setBar({ open: true, message: "Welcome back! Redirecting…", severity: "success" });
      setTimeout(() => navigate("/dashboard"), 600);
    } catch (e: any) {
      setBar({ open: true, message: e?.message || "Login failed", severity: "error" });
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={6} display="grid" sx={{ p: 4 }}>
        <Container maxWidth="sm" sx={{ my: "auto" }}>
          <Paper className="glass" sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              <span className="gradient-text">Sign in</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Access your dashboard, courses, analytics and more.
            </Typography>

            <Box mt={2} display="grid" gap={2}>
              <TextField label="Email" type="email" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)} />
              <TextField label="Password" type="password" fullWidth value={password} onChange={(e)=>setPassword(e.target.value)} />
              <Button size="large" variant="contained" onClick={onSubmit}>Login</Button>
            </Box>

            <Typography mt={2} variant="body2">
              No account?{" "}
              <Link component={RouterLink} to="/register" underline="hover">Create one</Link>
            </Typography>
          </Paper>
        </Container>
      </Grid>

      {/* Right visual panel */}
      <Grid item xs={12} md={6} sx={{
        display: "grid",
        placeItems: "center",
        p: 4,
        background:
          "radial-gradient(800px 400px at 80% 20%, rgba(124,58,237,0.25), transparent 60%)," +
          "radial-gradient(900px 500px at -10% 80%, rgba(14,165,233,0.25), transparent 60%)",
      }}>
        <Box textAlign="center" maxWidth={480}>
          <Typography variant="h3" fontWeight={900} className="gradient-text">Personalized Learning</Typography>
          <Typography mt={1.5} color="text.secondary">
            Adaptive courses, progress insights and gamified learning—beautifully organized.
          </Typography>
        </Box>
      </Grid>

      <AlertBar open={bar.open} onClose={()=>setBar({...bar, open:false})} severity={bar.severity} message={bar.message} />
    </Grid>
  );
}
