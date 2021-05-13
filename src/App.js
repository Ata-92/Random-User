import { useEffect, useState } from "react";
import "./App.css";
import email from "../src/assets/email.svg";
import phone from "../src/assets/phone.svg";
import location from "../src/assets/location.svg";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const getData = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) =>
        res.data.results.map((user) => ({
          image: `${user.picture.large}`,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: `${user.email}`,
          phone: `${user.cell}`,
          location: `${user.location.city} - ${user.location.country}`,
          age: `Age: ${user.dob.age}`,
          registration: `Register Date: ${user.registered.date.slice(0, 10)}`,
        }))
      )
      .then((data) => setUser(data));
  };

  useEffect(getData, []);

  return (
    <div className="App">
      <div className="card">
        <img src={user[0].image} alt="user" className="user-image" />
        <h1 className="user-name">{user[0].name}</h1>
        <img src={email} alt="Email Icon" className="email-image" />
        <p className="user-email">{user[0].email}</p>
        <img src={phone} alt="Phone Icon" className="phone-image" />
        <p className="user-cell">{user[0].phone}</p>
        <img src={location} alt="Location Icon" className="location-image" />
        <p className="user-location">{user[0].location}</p>
        <p className="user-age">{user[0].age}</p>
        <p className="user-registration">{user[0].registration}</p>
      </div>
      <div className="btn">
        <button onClick={getData}>Random User</button>
      </div>
    </div>
  );
}

export default App;
