import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router";

function Notfound(){
    let navigate = useNavigate();
function handleClick() {
    navigate(-1)
  }
  return (
    <Container className="py-5">
      <div className="pt-5"><h1>Error 404 Page Not Found.</h1></div>
      <button onClick={handleClick}>go previous page</button>
    </Container>
  );

}

export default Notfound;