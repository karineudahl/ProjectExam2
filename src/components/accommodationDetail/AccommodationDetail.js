import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { API_accommodation } from "../../constants/Api";
import AccommodatinDetailContent from "./AccommodationDetailContent";
import { AccommodationDetailBookingForm } from "./AccommodationDetailBookingForm";

function AccommodationDetail() {
    const { id } = useParams();   
    const { data: accommodationDetail, loading, error } = useFetch(API_accommodation + id + "?populate=*");

    return (
        <div className="pageContainer">
            <AccommodatinDetailContent accommodationDetail={accommodationDetail} loading={loading} error={error} />
            <AccommodationDetailBookingForm accommodationDetail={accommodationDetail} loading={loading} error={error} />
        </div>
    )
}

export default AccommodationDetail;