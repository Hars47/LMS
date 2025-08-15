import { useState } from "react";
import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { registerUser } from "../store/authSlice";
import { useAppDispatch } from "../store/store";
import AlertBar from "../components/AlertBar";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [bar, setBar] = useState<{open:boolean; message:string; severity:"success"|"info"|"warning"|"error"}>({open:false, message:"", severity:"success"});

  const onSubmit = async () => {
    try {
      await dispatch(registerUser(form)).unwrap();
      setBar({ open: true, message: "Account created! Redirecting…", severity: "success" });
      setTimeout(() => navigate("/dashboard"), 600);
    } catch (e: any) {
      setBar({ open: true, message: e?.message || "Registration failed", severity: "error" });
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={6} display="grid" sx={{ p: 4 }}>
        <Container maxWidth="sm" sx={{ my: "auto" }}>
          <Paper className="glass" sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              <span className="gradient-text">Create account</span>
            </Typography>
            <Box mt={2} display="grid" gap={2}>
              <TextField label="Full name" fullWidth value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
              <TextField label="Email" type="email" fullWidth value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
              <TextField label="Password" type="password" fullWidth value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} />
              <Button size="large" variant="contained" onClick={onSubmit}>Register</Button>
            </Box>

            <Typography mt={2} variant="body2">
              Already have an account?{" "}
              <Link component={RouterLink} to="/login" underline="hover">Sign in</Link>
            </Typography>
          </Paper>
        </Container>
      </Grid>

      <Grid item xs={12} md={6} sx={{
        display: "grid", placeItems: "center", p: 4,
        background:
          "radial-gradient(800px 400px at 80% 20%, rgba(124,58,237,0.25), transparent 60%)," +
          "radial-gradient(900px 500px at -10% 80%, rgba(14,165,233,0.25), transparent 60%)",
      }}>
        <Box textAlign="center" maxWidth={480}>
          <Typography variant="h3" fontWeight={900} className="gradient-text">Welcome!</Typography>
          <Typography mt={1.5} color="text.secondary">
            Join and start your adaptive learning journey.
          </Typography>
        </Box>
      </Grid>

      <AlertBar open={bar.open} onClose={()=>setBar({...bar, open:false})} severity={bar.severity} message={bar.message} />
    </Grid>
  );
}
