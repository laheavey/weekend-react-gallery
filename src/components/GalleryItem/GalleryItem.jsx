import axios from "axios";

function GalleryItem ({picture, getGallery}) {

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
        console.log(picture.id)
        event.preventDefault();
        putGallery({picture, getGallery});
    }

    return (
        <div>
        <img src={picture.path}></img>
        <div>
            <button onClick={HandleLikes}>Like It!</button>
        </div>
        <div>
            Like Count: {picture.likes}
        </div>
        </div>
    )
}

export default GalleryItem;