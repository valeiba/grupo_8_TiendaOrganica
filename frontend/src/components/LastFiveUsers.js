import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LastFiveUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3001/api/users/lastFiveUsers"
        );
        const data = await res.json();
        setUsers(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimos 5 usuarios registrados
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {users.map((user, i) => (
              <div key={i} className="col-12 mb-4">
                <Link to="/" className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {user.first_name + " " + user.last_name}{" "}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastFiveUsers;
