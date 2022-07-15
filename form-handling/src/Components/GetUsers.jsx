import React, { useState, useEffect } from "react";
import axios from "axios";

const GetUsers = () => {
  const [usersData, setUsersData] = useState([]);

  function getData() {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-div">
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {usersData.map((item) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default GetUsers;
