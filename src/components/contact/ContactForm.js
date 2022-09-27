import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage";
import ContactInformation from "../common/ContactInformation";
import { API_messages } from "../../constants/Api";
import PopupMessage from "../common/PopupMessage";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(2, "Name must be at least two characters"),
    email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema),});

    const [submitting, setSubmitting] = useState(null); 
    const [submittingError, setSubmittingError] = useState(null); 
    const [button, setButton] = useState(false); 

    async function onSubmit(dataFromForm) {
        try {
            await axios.post(
                API_messages, 
                {
                    data: {
                        name: dataFromForm.name,
                        email: dataFromForm.email,
                        messagetext: dataFromForm.message,
                    }
                });
            setSubmitting(`Thank you for your message, ${dataFromForm.name}. We will answer to ${dataFromForm.email} as soon as possible.`);
		} catch (error) {
            setSubmittingError(`An error occured ${error}`);
		} finally {
            setButton(false);
		}
    }

    return ( 
        <div className="form__container-contact-login">      
            <form className="form__layout" onSubmit={handleSubmit(onSubmit)}>
                <h2>Send us a message</h2>
                {submitting && <PopupMessage trigger={true} children={submitting} button="/" buttonName="Home"></PopupMessage>}
                {submittingError && <ErrorMessage>{submittingError}</ErrorMessage>}

                <div className="form__layout-content">
                    <input {...register("name")} placeholder="Your Name"/>
                    <label htmlFor="name">Name *</label>
                    {errors.name && <span className="error-text">{errors.name.message}</span>}
                </div>

                <div className="form__layout-content">
                    <input {...register("email")} placeholder="Your email"/>
                    <label htmlFor="email">Email *</label>
                    {errors.email && <span className="error-text">{errors.email.message}</span>}
                </div>

                <div className="form__layout-content">
                    <textarea {...register("message")} rows="8" placeholder="Your message"/>
                    <label htmlFor="message">Message *</label>
                    {errors.message && <span className="error-text">{errors.message.message}</span>}
                </div>

                <div className="button-container">
                    <button className="button send-message">{button ? "Sending message..." : "Send"}</button>            
					<div className="button-background"></div>
				</div>
            </form>

            <div className="form__container-contact-login__information">
                <ContactInformation />
            </div>
        </div>
    );
}