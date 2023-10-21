import { Typography, Stack, Container } from '@mui/material';
import Title from "../Title"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function AboutProject() {
  return (
    <Container maxWidth="md">
 <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
    HEALTHAK
  </Title>
  <Title variant={{ xs: "h5", md: "h6" }} sx={{ textAlign: "center", color: "#1F485B", py:2 }}>
    About the Project
  </Title>
  <Typography variant="body2" sx={{ textAlign: "center", fontSize: "15px", color: "gray", py: 1 }}>
    Healthak is a portable Pharmacy/Clinic web application that aims to provide medical services, patient profiles, disease control, physician dashboards, patient groups, appointment scheduling, and communication channels. The application's focus is on providing seamless communication between patients and physicians, personalized patient health tracking, and educational resources for patients. Physicians can monitor their patients' health, receive alerts, and engage in real-time consultations.
  </Typography>
  <Stack direction="column" py={3}>
  <Title variant={{ xs: "h5", md: "h6" }} sx={{ textAlign: "center", color: "#1F485B" , py:2}}>
    Emergancy Care
  </Title>
  <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" >
    <Stack direction="column" spacing={2}> <Typography
      sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
      <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
      Primary Care
    </Typography>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Medicine
      </Typography>
      </Stack>
    <Stack direction="column" spacing={2}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Orthopedic
      </Typography>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Cardiology
      </Typography>
    </Stack>
    <Stack direction="column" spacing={2}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Gynaecology
      </Typography>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Rheumatology
      </Typography>
    </Stack>
    <Stack direction="column" spacing={2}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Endocrine
      </Typography>
      <Typography
        sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
        <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
        Neurology
      </Typography>
    </Stack>
  </Stack>
  </Stack>
  
    </Container>
   
  )
}

export default AboutProject