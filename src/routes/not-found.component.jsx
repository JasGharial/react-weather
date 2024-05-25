import { useNavigate } from "react-router-dom";
import Button from "../components/ui/button/button.component";

const NotFoundRoute = () => {
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate('/')
  }

  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button onClick={goToHomeHandler} >Go to Home</Button>
    </div>
  );
};

export default NotFoundRoute;