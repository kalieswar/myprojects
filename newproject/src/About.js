import { useNavigate } from "react-router-dom";






function About(){
    // return(
    //     <>
    //     <main>
    //         <h2>Welcome To The About Page</h2>
    //         <p> You are now in about page...</p>
    //     </main>
    //     <nav>
    //         <Link to="/">Home</Link>
    //     </nav>
    //     </>
    // )

let navigate = useNavigate();
function handleClick() {
    navigate('/')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

    


export default About;