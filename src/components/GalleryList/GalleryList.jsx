import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";

function GalleryList ({galleryItems, getGallery}) {
    // Returns the gallery as a whole.
    return (
        <div>
            <Grid container spacing={3}>
            {galleryItems && galleryItems.map((image) => {
                return (
                    <GalleryItem image={image} key={image.id} getGallery={getGallery}/>
                )
            })}
            
            </Grid>
        </div>
    )
}

export default GalleryList;