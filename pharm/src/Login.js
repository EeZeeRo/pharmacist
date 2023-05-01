import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInWithEmailAndPassword, error } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            {error && <p>{error.message}</p>}
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}

export default Login;
