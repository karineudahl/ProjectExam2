import { HeadingH1 } from "../layout/Headings";
import LoginForm from "./LoginForm";
import { NavOrientation2 } from "../navigation/NavOrientation";

function Login() {
    return (
        <div className="pageContainer">
            <NavOrientation2 link1="/" name1="Home" link2="/login" name2="Login" />
            <HeadingH1 content="Login" />
            <LoginForm />
        </div>
    )
}

export default Login;