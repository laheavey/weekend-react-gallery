import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryItems}) {
    return (
        <p>
        {
        galleryItems && galleryItems.map((picture) => {
            return (<GalleryItem picture={picture} key={picture.id}/>)
        })}
        </p>
    )
}

export default GalleryList;