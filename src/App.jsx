import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users || response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const colors = [
    "bg-red-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  grid-cols-3 gap-2">
      {users.map((user, index) => (
        <div
          key={index}
          className={`shadow-lg rounded-2xl p-6 ${
            colors[index % colors.length]
          }`}
        >
          <div className="flex items-center justify-center space-x-4">
            <img
              src={user.image}
              alt={user.firstName}
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h2 className=" text-purple-600">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-red-600">{user.role}</p>
            </div>
          </div>

          <div className="mt-4 space-y-2 ">
            <p>
              <span className="font-semibold  text-purple-600">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="font-semibold text-red-600">Phone:</span>{" "}
              {user.phone}
            </p>
            <p>
              <span className="font-semibold text-green-600">Age:</span>{" "}
              {user.age}
            </p>
            <p>
              <span className="font-semibold text-red-600">Gender:</span>{" "}
              {user.gender}
            </p>
            <p>
              <span className="font-semibold text-green-600">Blood Group:</span>{" "}
              {user.bloodGroup}
            </p>
            <p>
              <span className="font-semibold text-purple-600">Height:</span>{" "}
              {user.height} cm
            </p>
            <p>
              <span className="font-semibold text-red-600">Weight:</span>{" "}
              {user.weight} kg
            </p>
            <p>
              <span className="font-semibold text-red-600">University:</span>{" "}
              {user.university}
            </p>
            <p>
              <span className="font-semibold text-red-600">Crypto:</span>{" "}
              {user.crypto.coin} ({user.crypto.network})
            </p>
            <p className="break-words">
              <span className="font-semibold">Wallet:</span>{" "}
              {user.crypto.wallet}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
