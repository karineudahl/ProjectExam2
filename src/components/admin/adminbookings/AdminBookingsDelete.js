import { useState } from "react";
import useAxios from "../../hooks/useAxios";

export default function AdminBookingsDelete( {id} ) {
    const [error, setError] = useState(null); 
    const userLoggedIn = useAxios(); 
    const url = `/bookings/${id}`;

    async function handleDelete() {
        const doDelete = window.confirm("Do you want to delete this booking?");

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
        <button onClick={handleDelete} type="button" className="button-delete">{error ? "An error occured, booking is not deleted, try to log in." : "Delete Booking" } </button>
    )
}