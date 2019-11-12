import React from "react";
import NavBar from "components/NavBar";
import ProfileForm from "components/ProfileForm"

export default function DevTest() {
  return (
    <div>
      <small>
        <p>Put your component to test here </p>
        <p>
          After you are statisfied with the look and feel or functions, please
          remove it
        </p>
        <p>After group review, it can be integrated and adjusted </p>
      </small>
      <hr style={{ borderTop: "4px solid #151414" }} />

      {/* Add Component here */}

   
     <ProfileForm/>
    </div>
  );
}
