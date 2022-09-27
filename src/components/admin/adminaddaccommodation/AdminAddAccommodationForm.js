import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../../common/ErrorMessage";
import { API_accommodation } from '../../../constants/Api';
import AdminAddAccommodationRating from './AdminAddAccommodationRating';
import useAxios from "../../hooks/useAxios"; 
import { BsPlusSquare } from "react-icons/bs";

const schema = yup.object().shape({
    typeofaccommodation: yup.string().oneOf(["Guesthouse", "BedBreakfast","Hotel"]).label("Type of accommodation"),
    name: yup.string().required("Please enter name of accommodation").min(2, "Name must be at least two characters"),
    phone: yup.string().required("Please enter accommodation phone number").min(8, "Minimum 8 numbers").max(8, "Maximum 8 numbers"),
    email: yup.string().required("Please enter accommodation email").email("Please enter a valid email address"),
    adress: yup.string().required("Please enter accommodation address").min(10, "Adress must be over 10 characters"),
    price: yup.string().trim().required("Please enter price per night").min(3, "Minimum 3 numbers"),
    description: yup.string().required("Please enter description of accommodation").min(10, "The description must be at least 10 characters"),
    rating: yup.number().transform(value => isNaN(value) ? undefined : value).required("Please enter a rating"),
    featured: yup.boolean().required(),
    image: yup.mixed().required("You need to upload images").test("type", "Upload images in jpeg formt", (value) => { return value && value?.[0]?.type === "image/jpeg"; }),
});

export default function AdminAddForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema),});

    const [submitting, setSubmitting] = useState(false); 
    const [addError, setAddError] = useState(null); 

    let navigate = useNavigate();
    const url = API_accommodation + "?populate=*"
    const userLoggedIn = useAxios();

    async function onSubmit(dataForm) {
        setSubmitting(true); 
        setAddError(null);

        const formData = new FormData();
    
        for (let image of dataForm.image) {
            formData.append(`files.image`, image, image.name);
        }

        const { image, ...data } = dataForm;
        formData.append("data", JSON.stringify(data));
    
        try {
            await userLoggedIn.post(url, formData);
            navigate("/admin");
        } catch (error) {
            setAddError(`An error occured ${error}`);             
        } finally {
            setSubmitting(false);
        }
    }

    return ( 
        <div className="form__container-add-product"> 
            <form className="form__layout" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__container-add-product-heading">
                    <BsPlusSquare className="adminContainer-icon add-icon" />
                    <h2>Add accommodation</h2>
                </div>

                {addError && <ErrorMessage>{addError}</ErrorMessage>}
                
                <div className="form__layout-content">             
                    <select {...register("typeofaccommodation")} >
                        <option value="none" defaultValue >Choose ...</option>
                        <option value="Guesthouse" name="Guesthouse">Guesthouse</option>
                        <option value="BedBreakfast" name="BedBreakfast">Bed & Breakfast</option>
                        <option value="Hotel" name="Hotel">Hotel</option>
                    </select>
                    <label htmlFor="typeofaccommodation">Type of accommodation *</label>
                    {errors.typeofaccommodation && <span className="error-text">{errors.typeofaccommodation.message}</span>}
                </div>

                <div className="form__layout-content">
                    <input {...register("name")} name="name" placeholder="Type in name of accommodation ..."/>
                    <label htmlFor="name">Name of Accommodation *</label>
                    {errors.name && <span className="error-text">{errors.name.message}</span>}
                </div>

                <div className="form__layout-content">
                    <input type="number" name="phone" placeholder="Type in phone number to accommodation ..." {...register("phone")} />
                    <label htmlFor="phone">Phone number to accommodation *</label>
                    {errors.phone && <span className="error-text">{errors.phone.message}</span>}
                </div>
                
                <div className="form__layout-content">
                    <input {...register("email")} name="email" placeholder="Type in email adress to accommodation ..."/>
                    <label htmlFor="email">Email adress to accommodation *</label>
                    {errors.email && <span className="error-text">{errors.email.message}</span>}
                </div>

                <div className="form__layout-content">
                    <input {...register("adress")} name="adress" placeholder="Type in adress to accommodation ..."/>
                    <label htmlFor="adress">Adress to accommodation *</label>
                    {errors.adress && <span className="error-text">{errors.adress.message}</span>}
                </div>

                <div className="form__layout-content">
                    <input {...register("price")} type="number" name="price" placeholder="Type in price per night" />
                    <label htmlFor="price">Price per night *</label>
                    {errors.price && <span className="error-text">{errors.price.message}</span>}
                </div>
                
                <div className="form__layout-content">
                    <select {...register("rating")} name="rating"><AdminAddAccommodationRating /></select>
                    <label htmlFor="rating">Rating *</label>
                    {errors.rating && <span className="error-text">{errors.rating.message}</span>}
                </div>

                <div className="form__layout-content-radiobuttons">
                    <div className="form__layout-content-radiobuttons-text">
                        <label htmlFor="featured">Featured accommodation *</label>
                    </div>
                    <div>
                        <input {...register("featured",)} type="radio" name="featured" value={true} />
                        <label htmlFor="featured" className="form__layout-content-radiobuttons-label">Yes</label>
                        <input {...register("featured",)} type="radio" name="featured" value={false} />
                        <label htmlFor="featured" className="form__layout-content-radiobuttons-label">No</label>
                    </div>
                    {errors.featured && <span className="error-text">Choose one option</span>}
                </div> 
                
                <div className="form__layout-content">
                    <textarea {...register("description")} rows="10" name="description" placeholder="Type in description of accommodation"/>
                    <label htmlFor="description">Description of accommodation *</label>
                    {errors.description && <span className="error-text">{errors.description.message}</span>}
                </div>

                <div className="form__layout-content">
                    <input {...register("image")} type="file" name="image" multiple className="form__layout-content-images"/>
                    <label htmlFor="image">Upload images of accommodation *</label>
                    {errors.image && <span className="error-text">{errors.image.message}</span>}
                </div>

                <div className="button-container">
                    <button className="button add-accommodation">{submitting ? "Adding..." : "Add accommodation"}</button>            
					<div className="button-background"></div>
                </div>
            </form>
        </div>
    );
}