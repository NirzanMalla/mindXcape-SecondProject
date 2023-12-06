import  { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const Stories = () => {
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=7bac9af99b1f428aabfad796604cf50c'
      );
      setData(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    getNews();
  }, []); 

  return (
    <div>
      
      <Container>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {data.map((value, index) => (
            <Grid item key={index} md={4} sm={6} xs={12} >
              <Card  sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: 345, objectFit:'contain', boxShadow:'5px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
               <CardMedia sx={{ height: 170 }} image={value.urlToImage || 'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg' } title={value.title || 'default image'} />
                
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div">
                    {value.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.content}
                  </Typography>
                </CardContent>
                <CardActions> 
                  <Button size="small" variant='contained' color='success' >Share</Button>
                  <Button size="small" variant='outlined' color='success'>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Stories;
