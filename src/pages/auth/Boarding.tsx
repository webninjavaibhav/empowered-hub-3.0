import { Link } from "react-router-dom";
import CustomButton from "../../components/Button";

function Boarding() {
  return (
    <div>
      <div className="h-screen">
        <div className="flex justify-center items-center gap-4 h-full">
          <Link to="/signup">
            <CustomButton className="btn-primary">Sign Up</CustomButton>
          </Link>
          <CustomButton>Sign In</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Boarding;
