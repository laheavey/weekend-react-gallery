import axios from "axios";
import react from "react";
import { useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, CardActionArea, CardActions } from '@mui/material';
import Typography from "@mui/material/Typography";

import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

function GalleryItem ({picture, getGallery}) {
    const [isActive, setActive] = useState(true)

    const putGallery = ({picture, getGallery}) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${picture.id}`,
        }).then((response) => {
            console.log('Response from PUT /like: ', response.data);
            getGallery();
        }).catch((error) => {
            console.log('Error in PUT /like: ', error);
        })
    }

    const HandleLikes = (event) => {
        console.log(picture)
        event.preventDefault();

        // picture.likes+= 1;

        putGallery({picture, getGallery});
    }

    function addLikes () {

    }

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <>
            <Grid item xs>
            {isActive 
            ?
            <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    image={picture.path}
                    alt={picture.description}>
                    </CardMedia>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Love!">
                        <IconButton onClick={HandleLikes} size="small" color="error">
                            <FavoriteSharpIcon/>
                        </IconButton>
                    </Tooltip>
                    <Typography variant="body2">
                        {picture.likes}
                    </Typography>
                    <Tooltip title="Info">
                        <IconButton onClick={toggleClass} size="small" color="primary" sx={{ top: 0, right: '-69%' }}>
                            <TextSnippetSharpIcon/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            :
            <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250}}>
                <CardActionArea>
                    <CardContent sx={{ minHeight: 268 }}>
                        <Typography variant="body1">
                            {picture.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Love!">
                        <IconButton onClick={HandleLikes} size="small" color="error">
                            <FavoriteSharpIcon/>
                        </IconButton>
                    </Tooltip>
                    <Typography variant="body2">
                        {picture.likes}
                    </Typography>
                    <Tooltip title="Info">
                        <IconButton onClick={toggleClass} size="small" color="primary" sx={{ top: 0, right: '-69%' }}>
                            <TextSnippetSharpIcon/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            }
            </Grid>
        </>
        
    )
}

export default GalleryItem;