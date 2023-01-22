import axios from "axios";
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

function GalleryItem ({image, getGallery}) {
    // Piece of state for toggling image/description.
    const [isActive, setActive] = useState(true)

    // PUT route for likes. Moved code to add a like from client-side to
    // server-side code.
    const putGallery = ({image, getGallery}) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${image.id}`,
        }).then((response) => {
            console.log('Success in PUT /like!');
            getGallery();
        }).catch((error) => {
            console.log('Error in PUT /like: ', error);
        })
    }

    // Meant to handle updating likes in the server. Does not work.
    const HandleLikes = (event) => {
        console.log(image)
        event.preventDefault();
        putGallery({image, getGallery});
    }

    // Function(?) to toggle image/description.
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
                    image={image.path}
                    alt={image.description}>
                    </CardMedia>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Love!">
                        <IconButton onClick={HandleLikes} size="small" color="error">
                            <FavoriteSharpIcon/>
                        </IconButton>
                    </Tooltip>
                    <Typography variant="body2">
                        {image.likes}
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
                            {image.description}
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
                        {image.likes}
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