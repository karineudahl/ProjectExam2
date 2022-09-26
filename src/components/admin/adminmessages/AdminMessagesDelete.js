import { useState } from "react";
import useAxios from "../../hooks/useAxios";

export default function AdminMessagesDelete( {id} ) {
    const [error, setError] = useState(null); 
    const userLoggedIn = useAxios(); 
    const url = `/messages/${id}`;

    async function handleDelete() {
        const doDelete = window.confirm("Do you want to delete this message?");

        if (doDelete) {
            try {
                await userLoggedIn.delete(url)
                window.location.reload()
            } catch (error) {
                setError(error); 
            }
        }
    }

    return (
        <button onClick={handleDelete} type="button" className="button-delete">{error ? "An error occured, message is not deleted, try to log in." : "Delete message" } </button>
    )
}