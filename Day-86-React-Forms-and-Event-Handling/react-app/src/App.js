import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        if (name.trim() === "" || email.trim() === "") {

            setMessage("Please fill in all fields.");

            return;

        }

        setMessage(`Welcome ${name}! Form submitted successfully.`);

    };

    return (

        <div className="container">

            <h1>📝 React Forms & Event Handling</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

            <h3>{message}</h3>

        </div>

    );

}

export default App;