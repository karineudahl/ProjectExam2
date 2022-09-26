import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage"; 
import AuthContext from "../context/AuthContext";
import { API_base } from "../../constants/Api";
import { HeadingH2 } from "../layout/Headings";
import { Paragraph } from "../layout/Paragraph";

const url = API_base + "auth/local";

const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false); 
	const [loginError, setLoginError] = useState(null); 

	let navigate = useNavigate();
	
	const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

	const [auth, setAuth] = useContext(AuthContext);
    console.log(auth); 
	
    async function onSubmit(data) {
        setSubmitting(true);
		setLoginError(null);
        
		try {
			const response = await axios.post(url, data); 
			setAuth(response.data);
			navigate("/admin"); 
		} catch (error) {
			setLoginError("Wrong username or password");
		} finally {
			setSubmitting(false)
		}
    } 

    return (
        <div className="form__container-contact-login">
			<div className="form__container-contact-login__information">
				<HeadingH2 content="Administrator"/>
				<Paragraph content="Add accommodations." />
				<Paragraph content="Read massages." />
				<Paragraph content="Handle bookings." />
			</div>
		
			<form onSubmit={handleSubmit(onSubmit)} disabled={submitting} className="form__layout">
				<HeadingH2 content="Login Administrator"/>
                {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
				
                <div className="form__layout-content">
					<input {...register("identifier")} />
					<label htmlFor="identifier">Username *</label>
					{errors.identifier && <span className="error-text">{errors.identifier.message}</span>}				
				</div>

				<div className="form__layout-content">
					<input {...register("password")} />		
					<label htmlFor="password">Password *</label>
					{errors.password && <span className="error-text">{errors.password.message}</span>}
				</div>		

				<div className="button-container">
					<button className="button login">{submitting ? "Loggin in..." : "Login"}</button>            
					<div className="button-background"></div>
				</div>      
        	</form>
		</div>
    );
}