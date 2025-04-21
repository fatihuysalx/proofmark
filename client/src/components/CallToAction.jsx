import { Box, Typography, Button } from "@mui/material";

const CallToAction = () => {
  return (
    <Box sx={{ background: "linear-gradient(90deg, #14b8a6, #06b6d4)", color: "#fff", py: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Web3 ile Şeffaf Bir Tedarik Zinciri İçin Adım Atın
      </Typography>
      <Typography variant="body1" mb={3}>
        Blockchain gücüyle güvenli ve şeffaf doğrulama sistemi şimdi elinizin altında.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: "#fff", color: "#14b8a6", fontWeight: "bold", '&:hover': { backgroundColor: "#f0f0f0" } }}>
        Hemen Başla
      </Button>
    </Box>
  );
};

export default CallToAction;
