// src/components/FeatureSection.jsx
import { Grid, Card, CardContent, Typography } from "@mui/material";

const features = [
  {
    title: "🚀 Hızlı",
    desc: "Blockchain teknolojisi sayesinde işlemler anında tamamlanır.",
  },
  {
    title: "🔒 Güvenli",
    desc: "Kriptografi ile verilerinizi en üst seviyede koruyun.",
  },
  {
    title: "🌍 Şeffaf",
    desc: "Herkes tarafından doğrulanabilir kayıtlarla güveni artırın.",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <Typography variant="h4" align="center" gutterBottom>
        Neden ProofMarker?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="feature-card">
              <CardContent>
                <Typography variant="h5" gutterBottom>{feature.title}</Typography>
                <Typography>{feature.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default FeatureSection;
