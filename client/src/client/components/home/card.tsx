import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MediaCard({
  imageLink,
  alt,
  title,
  birdName,
  breedName,
  price,
  city,
  link,
}) {
  return (
    <Card style={{ width: '18%' }}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imageLink} alt={alt} />
          <CardContent>
            <Typography
              gutterBottom
              style={{ fontWeight: 'bold', color: 'black' }}
              variant="h5"
              component="div"
            >
              {birdName}
            </Typography>
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold' }}
              color="text.secondary"
            >
              {breedName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <div className="" style={{ width: '100%' }}>
          <Button
            disabled
            style={{
              backgroundColor: '#191970',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              width: '50%',
            }}
            size="small"
          >
            {price} PKR
          </Button>
          <Button
            className="ml-5"
            disabled
            style={{
              marginLeft: '5%',
              backgroundColor: '#191970',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              width: '45%',
            }}
            size="small"
          >
            {city}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

/*
<Card sx={{ maxWidth: 250 }} onClick={() => console.log('hello gee')}>
      <CardMedia component="img" height="140" image={imageLink} alt={alt} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          style={{ fontWeight: 'bold' }}
          component="div"
        >
          {birdName}
        </Typography>
        <Typography
          variant="body2"
          style={{ fontWeight: 'bold' }}
          color="text.secondary"
        >
          {breedName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="" style={{ width: '100%' }}>
          <Button
            disabled
            style={{
              backgroundColor: '#191970',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            size="small"
          >
            {price} PKR
          </Button>
          <Button
            className="ml-5"
            disabled
            style={{
              marginLeft: '5%',
              backgroundColor: '#191970',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            size="small"
          >
            {city}
          </Button>
        </div>
      </CardActions>
    </Card>
*/
