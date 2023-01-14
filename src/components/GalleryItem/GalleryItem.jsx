import axios from "axios";
import react from "react";
import { useState } from "react";

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
        console.log(picture.id)
        event.preventDefault();
        putGallery({picture, getGallery});
    }

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <div onClick={toggleClass}>

            {isActive ?
            <img src={picture.path}></img>
            :
            <>{picture.description}</>
            }
            
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