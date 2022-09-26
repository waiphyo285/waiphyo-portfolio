import React from "react";
import { RandomReveal } from 'react-random-reveal'

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
                    <span className="bi bi-circle-fill text-info profile-dot"></span>
                </figure>
                <div className="text-light" >
                    <h1 className="title-name">
                        {fullname}
                    </h1>
                    <span className="mx-2 greeting">
                        <RandomReveal
                            isPlaying
                            duration={5}
                            characters={greeting}
                        />
                    </span>
                </div>
            </div>
        </div >
    );
}

export default ProfileComponent