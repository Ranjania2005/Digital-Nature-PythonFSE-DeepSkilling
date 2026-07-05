import { useState } from "react";

function StudentProfile() {

    const [profile, setProfile] = useState({

        name: "",

        email: "",

        semester: ""

    });

    function handleChange(event) {

        const { name, value } = event.target;

        setProfile({

            ...profile,

            [name]: value

        });

    }

    return (

        <div className="profile-card">

            <h2>Student Profile</h2>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={profile.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
            />

            <input
                type="text"
                name="semester"
                placeholder="Semester"
                value={profile.semester}
                onChange={handleChange}
            />

            <hr />

            <p><strong>Name :</strong> {profile.name}</p>

            <p><strong>Email :</strong> {profile.email}</p>

            <p><strong>Semester :</strong> {profile.semester}</p>

        </div>

    );

}

export default StudentProfile;