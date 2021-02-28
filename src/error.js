import { Link } from "react-router-dom";

function Error() {
    return (
      <div>
        <div>Error 404 Page not found!</div>
        <div className="error">
              <Link to="/">
                Go back to home page 
              </Link>
            </div>
            </div>
       
    );
}

export default Error;