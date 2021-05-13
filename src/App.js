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
    </div>
  );
}

export default App;
