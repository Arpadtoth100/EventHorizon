import { useState } from "react"
import { storage } from "../config/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import SelectDateFromTo from "../components/utilities/SelectDateFromTo"
import Map from "../components/GoogleMap/Map"

function CreateEventScreen() {
    const [progress, setProgress] = useState(0)
    const [imageToUpload, setImageToUpload] = useState(null)

    const imageHandler = (event) => {
        setImageToUpload(event.target.files[0])
        console.log(event.target.files[0])
    }

    const uploadHandler = (event) => {
        event.preventDefault();
        uploadImage(imageToUpload)
    }

    const uploadImage = (image) => {
        if (!image) return;
        const storageRef = ref(storage, `/images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on("state_changed", (snapshot => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(prog)
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => console.log(url))
        }
        ))
    }

    console.log(new Date())

    return (
        <div className="outlet_main create_event_main">

            <form className="create_event_form">

                <label htmlFor="ce_public" className="textlabel">
                    Public or Draft
                </label>
                <select className="create_event_select" name="public" id="ce_public">
                    <option value="public">Public</option>
                    <option value="draft">Draft</option>
                </select>

                <label htmlFor="ce_title" className="textlabel">
                    Event Title
                </label>
                <input
                    type="text"
                    placeholder="Event title"
                    name="title"
                    id="ce_title"
                    className="textinput"
                />

                <label htmlFor="ce_category" className="textlabel">
                    Category
                </label>
                <select className="create_event_select" name="category" id="ce_category">
                    <option value="Music">Music</option>
                    <option value="flashmob">Flash Mob</option>
                    <option value="theatre">Theatre</option>
                    <option value="esports">E-Sports</option>
                    <option value="sports">Sports</option>
                </select>

                <label htmlFor="ce_description" className="textlabel">
                    Description
                </label>
                <input
                    type="textarea"
                    placeholder="Description"
                    name="description"
                    id="ce_description"
                    className="textinput"
                />

                <label htmlFor="ce_upload" className="textlabel">
                    Upload Image
                </label>
                <input
                    type="file"
                    placeholder="Upload Image"
                    name="upload"
                    id="ce_upload"
                    className="textinput"
                    onChange={imageHandler}
                />
                <button className="btn" onClick={uploadHandler}>Upload Image</button>
                <h4>Uploaded {progress}</h4>

                <label htmlFor="ce_online" className="textlabel">
                    Online or Offline
                </label>
                <select className="create_event_select" name="online" id="ce_online">
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>

                <label htmlFor="ce_location" className="textlabel">
                    Event Location
                </label>
                <input
                    type="text"
                    placeholder="Event Location"
                    name="location"
                    id="ce_location"
                    className="textinput"
                />

                <br />
                <SelectDateFromTo />

                <label htmlFor="ce_participants" className="textlabel">
                    Maximum Number of Participants
                </label>
                <input
                    type="text"
                    placeholder="Maximum Number of Participants"
                    name="participants"
                    id="ce_participants"
                    className="textinput"
                />

                <label htmlFor="ce_free" className="textlabel">
                    Free or Paying
                </label>
                <select className="create_event_select" name="free" id="ce_free">
                    <option value="free">Free</option>
                    <option value="paying">Paying</option>
                </select>

                <label htmlFor="ce_price" className="textlabel">
                    Price
                </label>
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    id="ce_price"
                    className="textinput"
                />

            </form>

            <Map />

        </div>
    )
}

export default CreateEventScreen