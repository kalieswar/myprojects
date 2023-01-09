import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <main>
            <h2>Welcome To The new React Page</h2>
            <p>Welcome to Home Page...</p>
        </main>
        <nav>
            <Link to="/about">About</Link>
        </nav>
        </>
    )
}


export default Home;