import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({ name, birth_year, gender, img, eye_color, skin_color }) {
  return (
    <Card sx={{ maxWidth: '95%', margin: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          birth_year:{birth_year}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          gender:{gender}
        </Typography>
        <Typography variant="body2">
          eye_color:{eye_color}
          <br />
          skin_color:{skin_color}
        </Typography>
        <img style={{ width: '200px' }} src={img} alt={name} />
      </CardContent>
    </Card>
  );
}
