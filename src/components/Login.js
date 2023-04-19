import { useState } from "react";
import Input from "./form/Input";
import { useOutletContext } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setJwtToken}  = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass",email,password)

        if (email === "admin@gmail.com") {
            setJwtToken("asd")
        }
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    name="email"
                    type="email"
                    className="form-control"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input
                    title="Password"
                    name="password"
                    type="password"
                    className="form-control"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr />
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login" />
            </form>

        </div>
    );
}

export default Login;

