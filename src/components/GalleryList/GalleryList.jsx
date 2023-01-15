import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";

function GalleryList ({galleryItems, getGallery}) {
    return (
        <div>
            <Grid container spacing={3}>
            {galleryItems && galleryItems.map((picture) => {
                return (
                    <GalleryItem picture={picture} key={picture.id} getGallery={getGallery}/>
                )
            })}
            
            </Grid>
        </div>
    )
}

export default GalleryList;