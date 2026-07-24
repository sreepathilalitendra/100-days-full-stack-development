function App() {

    const name = "Lalitendra";

    const course = "Full Stack Development";

    const year = 2026;

    return (

        <div className="container">

            <h1>🚀 React JSX</h1>

            <hr />

            <h2>Welcome, {name}</h2>

            <p>Course: {course}</p>

            <p>Year: {year}</p>

            <p>5 + 10 = {5 + 10}</p>

            <p>

                Status:

                {true ? " Learning React" : " Not Learning"}

            </p>

        </div>

    );

}

export default App;