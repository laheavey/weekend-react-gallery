import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryItems, getGallery}) {
    return (
        <div>
        {galleryItems && galleryItems.map((picture) => {
            return (
                <GalleryItem picture={picture} key={picture.id} getGallery={getGallery}/>
            )
        })}
        </div>
    )
}

export default GalleryList;