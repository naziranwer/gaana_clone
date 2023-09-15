import React from "react";
import "./Fav.css";

const FavWithoutLogin = () => {
  return (
    <>
      <div class="page-wrap music_pg">
        <div class="mMusic_listing">
          <div class="page-wrap login_msg_pg">
            <div class="_inner">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <g fill="none" fill-rule="evenodd">
                  <path
                    class="svg_color"
                    d="M147.5 0c-19.873.021-35.979 16.127-36 36v28.286c0 4.26 3.454 7.714 7.714 7.714H129.5c1.42 0 2.572-1.151 2.572-2.572V43.714c0-1.42-1.152-2.571-2.572-2.571h-10.286c-.878.008-1.748.168-2.571.473V36c0-17.042 13.815-30.857 30.857-30.857S178.357 18.958 178.357 36v5.616c-.824-.305-1.693-.465-2.571-.473H165.5c-1.42 0-2.572 1.151-2.572 2.571V69.43c0 1.42 1.152 2.571 2.572 2.571h10.286c4.26 0 7.714-3.454 7.714-7.714V36c-.021-19.873-16.127-35.979-36-36zm-28.286 46.286h7.715v20.571h-7.715c-1.42 0-2.571-1.151-2.571-2.571V48.857c0-1.42 1.151-2.571 2.571-2.571zm59.143 18c0 1.42-1.151 2.571-2.571 2.571h-7.715V46.286h7.715c1.42 0 2.571 1.15 2.571 2.571v15.429z"
                    transform="translate(-494 -280) translate(382.5 280)"
                  ></path>
                </g>
              </svg>
              <p>Need to Login to access “My Music”</p>
              <button>Login or Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavWithoutLogin;
