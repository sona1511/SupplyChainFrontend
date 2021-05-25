import React from "react";
import { useHistory } from "react-router-dom";

function Admin() {
  const history = useHistory();
  const resLoginHandler = () => history.push("/resLogin");
  const resSignupHandler = () => history.push("/resSignup");
  const backHandler =() => history.push("/chooseActor");
  return (
    <div>
      <h1>Admin</h1>

      <div className="container">
        <div
          className="card"
          style={{ marginTop: "150px", border: "1px solid transparent" }}
        >
          <div className="card-row">
            <div className="card-body text-center">
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={resLoginHandler}
              >
                LOG IN
              </button>
            </div>
            <div className="card-body text-center">
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={resSignupHandler}
              >
                SIGN UP
              </button>
              </div>
              <div className="card-body text-center">
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={backHandler}
              >
                GO BACK
              </button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Admin;
