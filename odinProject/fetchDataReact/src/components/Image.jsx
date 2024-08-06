import { useEffect } from "react";
import { useState } from "react";

const useImageURL = () => {
    const [imgURL, setImgURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((data) => setImgURL(data[0].url))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { imgURL, error, loading}
}

const Image = () => {
    const { imgURL, error, loading} = useImageURL();

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>

    return (
        <>
            <h1>An Image fetch from an API</h1>
            {imgURL && <img src={imgURL}></img>}
        </>
    )
}

export default Image;
