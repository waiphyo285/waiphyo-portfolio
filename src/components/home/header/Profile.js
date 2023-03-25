import React from "react";

function ProfileComponent({ profile_img, fullname, greeting }) {
  return (
    <div className="col-md-12 d-flex justify-content-center">
      <div className="text-center">
        <figure style={{ position: "relative" }}>
          <img
            className="img img-thumbnail rounded-circle"
            src={profile_img}
            height={150}
            width={150}
          />
        </figure>
        <div className="">
          <h1 className="title-name">{fullname}</h1>
          <span className="mx-2 greeting">{greeting}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
