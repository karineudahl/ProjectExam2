import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Moment from "moment";
import ErrorMessage from "../common/ErrorMessage";
import { API_bookings } from "../../constants/Api";
import LoadingMessage from "../common/LoadingMessage";
import PopupMessage from "../common/PopupMessage";
import AccommodationDetailBookingPopUp from "./AccommodationDetailBookingPopUp"; 

const schema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name").min(2, "Name must be at least two characters"),
    lastname: yup.string().required("Please enter your last name").min(2, "Name must be at least two characters"),
    phonenumber: yup.string().required("Please enter your phone number").min(8, "Minimum 8 numbers").max(8, "Maximum 8 numbers"),
    email: yup.string().required("Please enter your email").email("Please enter a valid email address"),
    numberofpeople: yup.number().transform(value => isNaN(value) ? undefined : value).required("Please select number of people"),
    numberofrooms: yup.number().transform(value => isNaN(value) ? undefined : value).required("Please select number of rooms"),
    checkin: yup.string().required("Select check in date"),
    checkout: yup.string().required("Select check out date"),
});

export function AccommodationDetailBookingForm({ accommodationDetail, loading, error }) {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema),});

    const [submitting, setSubmitting] = useState(false);  
    const [addError, setAddError] = useState(null); 
    const [button, setButton] = useState(false); 

    const url = API_bookings;
    
    const [buttonPopup, setButtonPopup] = useState(false); 

    async function onSubmit(dataForm) {
        const formData = new FormData();
        const { image, ...data } = dataForm;
        formData.append("data", JSON.stringify(data));
    
        try {
            await axios.post(url, formData);
            setSubmitting(`Hi, ${dataForm.firstname}. Thank you for booking ${dataForm.numberofrooms} room(s) for ${dataForm.numberofpeople} persons at ${dataForm.accommodation} from ${Moment(dataForm.checkin).format('LL')} to ${Moment(dataForm.checkout).format('LL')}. Looking forward to see you in Bergen!`);
        } catch (error) {
            setAddError(`An error occured ${error}`);
        } finally {
            setButton(false);
        }
    }

    return (
        <>
            <div className="accommodationDetail__buttonContainer">
                <div className="button-container">
                    <button className="button book" onClick={() => setButtonPopup(true)} >Book a stay</button>            
                    <div className="button-background"></div>
                </div>
            </div>
            <AccommodationDetailBookingPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="form__container-booking">
                    { loading && <LoadingMessage content="Loading accommodation ..."/>}
                    { error && <ErrorMessage>An error has occured {error}</ErrorMessage>}
                    { accommodationDetail && 
                    <form className="form__layout" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Book a stay at {accommodationDetail.attributes.name}</h2>
                        {submitting && <PopupMessage trigger={true} children={submitting} button="/accommodation" buttonName="Accommodations"></PopupMessage>}
                        {addError && <ErrorMessage>{addError}</ErrorMessage>}

                        <div className="form__container-booking-place">
                            <label htmlFor="accommodation">Place</label>
                            <select {...register("accommodation")}>
                                <option value={accommodationDetail.attributes.name} name="accommodation">{accommodationDetail.attributes.name}</option>
                            </select>
                        </div>

                        <div className="form__layout-flex">
                            <div className="form__layout-content">    
                                <input {...register("checkin")} name="checkin" type="date" placeholder="dd/mm/yyyy" min={new Date().toISOString().split('T')[0]} />
                                <label htmlFor="checkin">Check in</label>
                                {errors.checkin && <span className="error-text">{errors.checkin.message}</span>}
                            </div>

                            <div className="form__layout-content">
                                <input {...register("checkout")} name="checkout" type="date" placeholder="dd/mm/yyyy" min={new Date().toISOString().split('T')[0]} />
                                <label htmlFor="checkout">Check out</label>
                                {errors.checkout && <span className="error-text">{errors.checkout.message}</span>}
                            </div>
                        </div>
                        
                        <div className="form__layout-content">
                            <input {...register("firstname")} name="firstname" placeholder="Type in your first name ..."/>
                            <label htmlFor="firstname">First Name *</label>
                            {errors.firstname && <span className="error-text">{errors.firstname.message}</span>}
                        </div>

                        <div className="form__layout-content">
                            <input {...register("lastname")} name="lastname" placeholder="Type in your last name ..."/>
                            <label htmlFor="lastname">Last Name *</label>
                            {errors.lastname && <span className="error-text">{errors.lastname.message}</span>}
                        </div>

                        <div className="form__layout-content">
                            <input type="number" name="phonenumber" placeholder="Type in your mobil number ..." {...register("phonenumber")} />
                            <label htmlFor="phonenumber">Phone number *</label>
                            {errors.phonenumber && <span className="error-text">{errors.phonenumber.message}</span>}
                        </div>

                        <div className="form__layout-content">
                            <input {...register("email")} name="email" placeholder="Type in your email ..."/>
                            <label htmlFor="email">Email *</label>
                            {errors.email && <span className="error-text">{errors.email.message}</span>}
                        </div>

                        <div className="form__layout-content">
                            <select {...register("numberofpeople")}>
                                <option value="none" defaultValue >Choose ...</option>
                                <option value="1" name="numberofpeople">1</option>
                                <option value="2" name="numberofpeople">2</option>
                                <option value="3" name="numberofpeople">3</option>
                                <option value="4" name="numberofpeople">4</option>
                            </select>
                            <label htmlFor="numberofpeople">Number of people *</label>
                            {errors.numberofpeople && <span className="error-text">{errors.numberofpeople.message}</span>}
                        </div>

                        <div className="form__layout-content">  
                            <select {...register("numberofrooms")}>
                                <option value="none" defaultValue >Choose ...</option>
                                <option value="1" name="numberofrooms">1</option>
                                <option value="2" name="numberofrooms">2</option>
                                <option value="3" name="numberofrooms">3</option>
                            </select>
                            <label htmlFor="numberofrooms">Number of rooms *</label>
                            {errors.numberofrooms && <span className="error-text">{errors.numberofrooms.message}</span>}
                        </div>

                        <div className="button-container">
                            <button className="button booking">{button ? "Booking in process..." : "Book"}</button>            
                            <div className="button-background"></div>
                        </div>
                    </form>
                    }
                </div>
            </AccommodationDetailBookingPopUp>
        </> 
    )
}