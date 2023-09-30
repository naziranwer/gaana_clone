import React, { useState } from "react";
// import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login({ openRegisterModal, closeModal }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            projectId: "9cwb93cdi4mj",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            appType: "music",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(data));
        // Redirect to the music player or other authorized content

        toast.success("Login Successful");
        navigate("/");
        closeModal();
      } else {
        // Handle login errors
        console.error("Login failed");
        toast.error("Wrong credentials.");
      }
    } catch (error) {
      console.error("Error during login", error);
      toast.error("Internal server problem. Please try again later.");
      setEmail("");
      setPassword("");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    openRegisterModal();
  };
  return (
    <section className="model-open">
      <div className="linner cent-pp login_pp ">
        <button className="close" aria-label="close" onClick={closeModal}>
          <svg width="17" height="17" viewBox="0 0 17 17">
            <path
              className="svg_color"
              fill="#000"
              fillRule="evenodd"
              d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"
            ></path>
          </svg>
        </button>
        <div className="userInputarea">
          <div className="loginHeader">
            <div className="logo">
              <svg width="129" height="33" viewBox="0 0 72 19">
                <g fill="none" fill-rule="evenodd">
                  <path
                    class="svg_color_brand"
                    fill="#e72c30"
                    d="M57.998 12.982c.122-.678.23-1.313.347-1.95.383-2.159.767-4.317 1.138-6.476.11-.625-.28-1.074-.925-1.104-.414-.018-.834-.012-1.248-.012-.864.006-1.436.51-1.583 1.35-.462 2.65-.937 5.301-1.411 7.946-.019.09-.129.234-.196.234-1.186-.018-2.368-.03-3.549-.108-.767-.048-1.382-.432-1.814-1.068-.024-.03-.055-.053-.097-.102-.165.175-.317.342-.48.498-.543.534-1.17.852-1.955.792-.554-.042-1.12 0-1.662-.096-.968-.174-1.759-.648-2.234-1.59-.073.324-.152.642-.225.966-.165.774-.158.768-.962.732-.572-.024-1.144-.102-1.638-.396-.377-.228-.7-.552-1.077-.852-.11.114-.262.282-.42.438-.542.528-1.169.828-1.954.798-.749-.03-1.497.018-2.222-.246-1.29-.474-1.99-1.583-1.766-2.927.293-1.77.548-3.55.95-5.295.408-1.752 1.474-2.975 3.355-3.353a4.12 4.12 0 01.815-.084c1.553-.006 3.105-.006 4.657-.006.079 0 .152.012.256.024-.152.852-.304 1.685-.45 2.52-.348 1.924-.7 3.843-1.035 5.769-.03.18.042.401.133.563.232.414.95.702 1.425.624.176-2.045.585-4.048 1.016-6.04.384-1.763 1.474-2.998 3.367-3.376a4.12 4.12 0 01.815-.084c1.553-.006 3.105-.006 4.658-.006.066 0 .14.012.243.018-.091.522-.177 1.031-.268 1.535-.414 2.285-.834 4.57-1.248 6.855-.06.324.055.594.323.792.103.078.22.156.34.186.25.066.53.18.768.132.328-.066.206-.426.249-.654.475-2.579.932-5.158 1.388-7.743.067-.36.134-.725.207-1.103.098-.006.183-.018.274-.018 1.51 0 3.025-.006 4.535 0 .59.006 1.169.126 1.704.384.908.444 1.437 1.17 1.395 2.171-.031.84-.183 1.68-.323 2.513-.366 2.111-.749 4.222-1.126 6.327-.019.12-.03.24-.068.354-.023.06-.103.138-.157.138-.755.036-1.492.03-2.265.03zM39.291 3.464a.917.917 0 00-.147-.024c-.766 0-1.54-.006-2.306 0-.768.006-1.346.468-1.485 1.206-.3 1.574-.584 3.152-.853 4.731-.134.798.268 1.248 1.108 1.284.335.011.67.006 1.005 0 .919-.006 1.467-.474 1.63-1.367.25-1.392.512-2.784.767-4.169.086-.545.177-1.098.28-1.661zm10.172.006c-.085-.018-.116-.03-.14-.03-.773 0-1.54-.012-2.313 0-.78.011-1.358.474-1.498 1.224a422.148 422.148 0 00-.852 4.731c-.122.714.195 1.14.925 1.23.402.048.81.03 1.212.03.883-.006 1.442-.474 1.594-1.332l.713-3.85c.122-.654.237-1.32.359-2.003zm-21.038 9.518c-.213 0-.384.006-.554 0-.84-.018-1.687.018-2.52-.072-1.26-.144-2.137-.924-2.387-1.997-.14-.588-.06-1.17.043-1.751.28-1.548.548-3.1.846-4.648.36-1.872 1.826-3.215 3.769-3.365 1.138-.09 2.288-.054 3.433-.066.608-.006 1.211 0 1.868 0-.079.474-.152.924-.23 1.367-.44 2.453-.884 4.906-1.328 7.36-.28 1.54-.536 3.082-.852 4.617-.427 2.093-2.045 3.058-3.707 3.293-.402.053-.81.06-1.212.06-1.4.005-2.8 0-4.2 0-.018 0-.037-.006-.08-.018.006-.036 0-.072.019-.102.39-.69.773-1.38 1.181-2.057.06-.096.243-.162.371-.162 1.23-.013 2.453-.006 3.683-.006.938 0 1.419-.378 1.62-1.284.097-.377.151-.737.237-1.17zm-.926-2.363v.036c.317 0 .633-.024.944.006.31.03.42-.096.469-.384.322-1.883.657-3.766.992-5.65.128-.707-.237-1.17-.974-1.193-.408-.012-.81-.006-1.217-.006-.816.012-1.37.474-1.516 1.271-.158.864-.323 1.722-.475 2.586-.134.773-.286 1.546-.377 2.326-.068.558.243.924.82.99.44.054.89.018 1.334.018zm44.044-9.53c-.214 1.194-.427 2.345-.634 3.502a669.492 669.492 0 00-.864 4.793c-.116.641.158 1.043.786 1.247.078.024.17.174.158.252-.11.69-.238 1.373-.366 2.099-1.077-.066-2.014-.39-2.684-1.301-.177.185-.329.36-.493.52-.536.517-1.15.829-1.93.787-.675-.036-1.352.03-2.015-.175-1.492-.455-2.24-1.612-1.978-3.124.298-1.739.553-3.484.95-5.206.376-1.619 1.35-2.8 3.055-3.25a4.67 4.67 0 011.078-.15c1.583-.018 3.165-.006 4.742-.006.048 0 .104.006.195.012zm-2.8 2.369c-.123-.012-.196-.024-.274-.024-.731 0-1.462-.006-2.192 0-.755.011-1.333.456-1.467 1.182a319.26 319.26 0 00-.87 4.881c-.104.612.213 1.032.845 1.11.408.054.828.042 1.242.042.95 0 1.498-.48 1.662-1.404.268-1.511.554-3.016.828-4.522.079-.413.146-.827.225-1.265zM0 0h18v18H0z"
                  ></path>
                  <path
                    class="svg_g"
                    fill="#FFF"
                    d="M11.585 3.752c.371-.004.74 0 1.143 0-.049.297-.093.58-.142.86-.268 1.541-.54 3.084-.811 4.626-.171.968-.328 1.937-.522 2.903-.261 1.316-1.251 1.922-2.268 2.07a5.588 5.588 0 01-.742.037c-.856.004-1.713 0-2.57 0a.151.151 0 01-.048-.012c.004-.021 0-.045.01-.063.24-.434.474-.867.724-1.293.037-.06.149-.102.227-.102.753-.008 1.501-.004 2.254-.004.573 0 .867-.237.99-.807.06-.237.093-.463.146-.735-.13 0-.235.004-.34 0-.514-.013-1.032.01-1.542-.046-.772-.09-1.308-.58-1.461-1.255-.085-.37-.036-.736.027-1.102.171-.972.336-1.949.518-2.92.22-1.177 1.118-2.022 2.306-2.115.697-.057 1.4-.035 2.1-.042zM9.91 5.225l-.373.001c-.498.008-.837.297-.927.8-.097.542-.197 1.081-.29 1.624-.082.487-.175.973-.23 1.463-.042.35.147.66.501.66h1.393c.177 0 .258-.061.288-.241.197-1.184.402-2.368.606-3.552.08-.444-.145-.736-.596-.75-.249-.008-.495-.004-.745-.004z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="row">
              <strong className="title">Login</strong>
              <small>
                Get a personalized experience, and access all your music
              </small>
            </div>
          </div>
          <form className="row_b">
            <div className="loginInput ph_dropd">
              <input
                id="loginId"
                type="text"
                placeholder="Enter Your Email Id"
                maxLength="80"
                autoFocus=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="custom-btn"
              disabled=""
              type="submit"
              onClick={handleLogin}
            >
              Continue
            </button>
            <div style={{ marginTop: "25px" }}>
              <small>Not have an account?</small>
              <button onClick={handleRegister} style={{ marginTop: "5px" }}>
                Register Here
              </button>
            </div>
          </form>
        </div>
        <div className="col col_poster sm-hide">
          <div class="row1">
            <strong>
              Over 30 million songs to suit every mood &amp; occasion
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
