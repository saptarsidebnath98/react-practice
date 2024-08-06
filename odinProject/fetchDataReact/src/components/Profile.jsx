import { useEffect, useState } from "react"
import Bio from "./Bio";

const Profile = ({delay}) => {

    const [imgURL, setImgURL] = useState();
    const [bioText, setBioText] = useState();

    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/photos", {mode : "cors"})
            .then(response => response.json())
            .then(data => setImgURL(data[0].url))
            .catch(error => console.error(error))
        }, delay);

        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/photos", {mode : "cors"})
            .then(response => response.json())
            .then(data => setBioText("I have done this! yeah PK! you are best and unique!"))    
            .catch(error => console.error(error))
        }, delay + 2000);

    },[delay])
  return (
    <div>
        <h1>UserName</h1>
      {imgURL && <img src={imgURL}/>}
      <Bio bioText={bioText}/>
    </div>
  )
}

export default Profile
