// import  { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function ProfileEdit() {
//     const navigate = useNavigate();
//     const [user, setUser] = useState({ username: '', email: '', password: '', reTypePassword: '' });
//     const token = localStorage.getItem('token'); // Assume token is stored in localStorage

//     useEffect(() => {
//         // Fetch the current user profile
//         fetch('http://localhost:3000/edityourprofile', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => setUser({ ...data, password: '', reTypePassword: '' }))
//         .catch(error => console.error('Error fetching profile:', error));
//     }, [token]);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setUser(prevState => ({ ...prevState, [name]: value }));
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (user.password !== user.reTypePassword) {
//             console.warn("Passwords don't match");
//             return;
//         }

//         const updatedUser = {
//             email: user.email,
//             username: user.username,
//             password: user.password
//         };

//         fetch('http://localhost:3000/edityourprofile', {
//             method: 'PUT',
//             headers: {
//                 'Authorization': ` Bearer ${token} `,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedUser)
//         })
//         .then(response => response.json())
//         .then(() => navigate('/products'))
//         .catch(error => console.error('Error updating profile:', error));
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <fieldset>
//                 <label htmlFor="username">Username:</label>
//                 <div>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={user.username}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <label htmlFor="email">Email:</label>
//                 <div>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={user.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <label htmlFor="password">Password:</label>
//                 <div>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={user.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <label htmlFor="reTypePassword">Re-type Password:</label>
//                 <div>
//                     <input
//                         type="password"
//                         id="reTypePassword"
//                         name="reTypePassword"
//                         value={user.reTypePassword}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </fieldset>

//             <button type="submit">Update Profile</button>
//         </form>
//     );
// }

{/* <fieldset>
<label htmlFor="username">Username</label>
<input
  name="username"
  className="form-input"
  id="username"
  type="text"
  required
  minLength={3}
  value={profile.username}
  onChange={handleChange}
/>
</fieldset>

<fieldset>
<label htmlFor="email">Email</label>
<input
  name="email"
  className="form-input"
  id="email"
  type="email"
  required
  value={profile.email}
  onChange={handleChange}
/>
</fieldset>

<fieldset>
<label htmlFor="dateOfBirth">Date of Birth</label>
<input
  name="dateOfBirth"
  className="form-input"
  type="date"
  id="dateOfBirth"
  required
  value={profile.dateOfBirth}
  onChange={handleChange}
/>
</fieldset>

<fieldset>
<label htmlFor="bio">Bio</label>
<textarea
  name="bio"
  className="form-input"
  id="bio"
  required
  value={profile.bio}
  onChange={handleChange}
/>
</fieldset>

<button>Save Profile</button> */}