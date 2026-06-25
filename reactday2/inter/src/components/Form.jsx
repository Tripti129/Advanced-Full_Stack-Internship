import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [data, setdata] = useState({
    first_name: "",
    last: "",
    address: "",
    skills: [],
    course: "",
    email: "",
    pass: "",
    confirmpass: "",
    age: "",
    mno: "",
    gender: "",
  });

  const change = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setdata((prev) => ({
          ...prev,
          skills: [...prev.skills, value],
        }));
      } else {
        setdata((prev) => ({
          ...prev,
          skills: prev.skills.filter((item) => item !== value),
        }));
      }
    } else {
      setdata((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if(data.first_name==="" || data.last===""){
    alert(" name is required");
    return;
    }
    if(data.first_name.length<3){
      alert("Minimum 3 characters are required");
      return;
    }
    if(data.last.length<2){
      alert("last_name must have minimum 2 chracters");
      return;
    }
    if(!data.email.includes("@"))
    {
      alert("@ is required")
      return;
    }
    if(!data.email.includes(".com")){
      alert("enter valid")
      return;
    }
    if(data.age===""){
      alert("Age is required");
      return;
    }
    if(!(data.age>=18 && data.age<60)){
      alert("Age is invalid");
      return;
    }
    console.log(data);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handlesubmit}>
        <h2>Create Account</h2>

        <div className="row">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={data.first_name}
            onChange={change}
          />

          <input
            type="text"
            placeholder="Last Name"
            name="last"
            value={data.last}
            onChange={change}
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={change}
        />

        <input
          type="password"
          placeholder="Password"
          name="pass"
          value={data.pass}
          onChange={change}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmpass"
          value={data.confirmpass}
          onChange={change}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={data.age}
          onChange={change}
        />

        <input
          type="number"
          placeholder="Mobile Number"
          name="mno"
          value={data.mno}
          onChange={change}
        />

        {/* Gender */}

        <div className="section">
          <label className="title">Gender</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={data.gender === "Male"}
                onChange={change}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={data.gender === "Female"}
                onChange={change}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={data.gender === "Other"}
                onChange={change}
              />
              Other
            </label>
          </div>
        </div>

        {/* Course */}

        <div className="section">
          <label className="title">Course</label>

          <select
            name="course"
            value={data.course}
            onChange={change}
          >
            <option value="">-- Select Course --</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="M.Tech">M.Tech</option>
          </select>
        </div>

        {/* Skills */}

        <div className="section">
          <label className="title">Skills</label>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="skills"
                value="HTML"
                checked={data.skills.includes("HTML")}
                onChange={change}
              />
              HTML
            </label>

            <label>
              <input
                type="checkbox"
                name="skills"
                value="CSS"
                checked={data.skills.includes("CSS")}
                onChange={change}
              />
              CSS
            </label>

            <label>
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                checked={data.skills.includes("JavaScript")}
                onChange={change}
              />
              JavaScript
            </label>

            <label>
              <input
                type="checkbox"
                name="skills"
                value="React"
                checked={data.skills.includes("React")}
                onChange={change}
              />
              React
            </label>
          </div>
        </div>

        <textarea
          placeholder="Write Address"
          rows="5"
          name="address"
          value={data.address}
          onChange={change}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;