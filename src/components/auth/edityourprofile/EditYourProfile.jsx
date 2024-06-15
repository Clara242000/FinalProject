
import { useContext, useEffect, useState } from "react";
import { IdContext, TokenContext } from "../../../App";
import { useNavigate } from "react-router-dom";

export default function EditYourProfile() {
  const { token } = useContext(TokenContext);
  const { id } = useContext(IdContext);
  const navigate = useNavigate();
  // const { idFromPath } = useParams();

  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });
// console.log('editprofile' + id);
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`
            // "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        console.log(data);
        setUserData({
          email: data.email,
          username: data.username,
          password: '',
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, [id, token]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, username , password} = formElement;

    const updatedUserData = {
      email: email.value,
      username: username.value,
      password: password.value,
    };

    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
         'Authorization' : `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      navigate("/products"); // Redirect to products page after successful update
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit your profile</h1>
      <fieldset>
        <label htmlFor="username">Username:</label>
        <div>
          <input type="text" id="username" name="username" value={userData.username} onChange={handleInputChange} />
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email:</label>
        <div>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange}/>
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <div>
          <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange}/>
        </div>
      </fieldset>

      <button type="submit">Save Changes</button>
    </form>
  );
}
