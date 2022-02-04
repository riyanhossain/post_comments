import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import lizard from '../../images/lizard.jpg'
const Cards = (props) => {
    let { id, userId, title, body } = props.post
    let images = props.ranImages[userId].urls.regular
    return (
        <div className='allcards'>

            <Card sx={{ maxWidth: 345 }}>
                post by: {userId}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={images}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Comments
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Cards;