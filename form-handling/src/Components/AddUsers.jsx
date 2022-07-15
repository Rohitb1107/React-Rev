// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const AddUsers = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     age: "",
//     email: "",
//   });

//   function changeHandler(e) {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   function submitHandler(e) {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8080/users", formData)
//       .then(() => {
//         alert("User registered successfully");
//       })
//       .catch((err) => {
//         console.log("Error:", err);
//       });
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Enter username"
//           onChange={changeHandler}
//         />

//         <input
//           type="number"
//           name="age"
//           placeholder="Enter age"
//           onChange={changeHandler}
//         />

//         <input
//           type="text"
//           name="email"
//           placeholder="Enter email"
//           onChange={changeHandler}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddUsers;
