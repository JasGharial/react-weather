// Dependencies and Contexts
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LocationContext } from "../../../contexts/location.context";
import { getLocalLatLong } from "../../../lib/utilities/geo_location.utils";

// Components
import Button from "../../../components/ui/button/button.component";

const Landing = () => {
  const navigate = useNavigate();
  const { setLocationLatLongs } = useContext(LocationContext);

  useEffect(() => {
    getLocalLatLong()
    .then((res) => setLocationLatLongs(res))
  }, [])

  const goToHomeHandler = async () => {
    navigate('/home')
  }

  return (
    <div>
      <Button onClick={goToHomeHandler} >Get Started</Button>
    </div>
  )
}

export default Landing;