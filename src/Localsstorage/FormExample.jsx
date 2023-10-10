import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./style.css";
import "./data.js";

function FormExample() {
  const [input, setInput] = useState({
    name: "",
    gender: "",
    email: "",
    number: "",
    degree: "",
    state: "",
    district: "",
    hobby: "",
    address: "",
  });
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ name: "" });

  // Password Validate
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("");
      setConfirmPasswordError("");
    } else {
      setPasswordError("Passwords do not match");
      setConfirmPasswordError("Passwords do not match");
    }
  };

  // Retrvivng data from localstorage
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("student")) || [];
  });
  // Storing data in localstorage
  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    const verify = validate();
    if (verify.name || verify.email) {
      setErrors(verify);
    } else {
      // Edit
      if (isEdit) {
        const oldData = [...data];
        oldData[editId] = input;
        setData(oldData);
        setIsEdit(false);
      } else {
        setData([...data, input]);
        setInput({ name: "" });
      }
    }
  };

  const handleEdit = (id) => {
    setInput(data[id]);
    setEditId(id);
    setIsEdit(true);
  };

  // Delete
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1); // Remove the item at the specified index
    setData(newData);
  };

  // validating form

  const validate = () => {
    const errors = {};
    if (input.name.length < 1) {
      errors.name = "Please Enter your Name";
    }
    if (input.email.length < 1) {
      errors.email = "Please Enter your email";
      // } if (input.password.length < 1) {
      //   errors.password = 'Please Enter your Password';
    }
    if (input.number.length < 1) {
      errors.number = "Please Enter your Number";
    } 
    if (input.degree.length < 1) {
      errors.degree = 'Please Select Course';
    }
    if (input.state.length < 1) {
      errors.state = "Please Select State";
    }
    if (input.district.length < 1) {
      errors.district = "Please Select district";
    }
    if (input.hobby.length < 1) {
      errors.hobby = "Please Select hobby";
    }
    if (input.gender.length < 1) {
      errors.gender = "Please Select Gender";
    }
    if (input.address.length < 1) {
      errors.address = "Please Select district";
    }

    return errors;
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Name */}
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={input.name || ""}
              onChange={handleChange}
            />

            <p className="text-danger">{errors.name}</p>
          </Form.Group>
          {/* Email */}
          <Form.Group as={Col} md="4" controlId="">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              value={input.email || ""}
              onChange={handleChange}
            />
            <p className="text-danger">{errors.email}</p>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="">
            <Form.Label>Enter your Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your Number"
              name="number"
              value={input.number || ""}
              onChange={handleChange}
            />
            <br />
            <p className="text-danger">{errors.number}</p>
          </Form.Group>
          {/* Password */}
          <Form.Group as={Col} md="4" controlId="">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword();
              }}
            />
            {/* <p className='text-danger'>{errors.password}</p> */}
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validatePassword();
              }}
            />
            {confirmPasswordError && (
              <div className="error-message">{confirmPasswordError}</div>
            )}
          </Form.Group>

          {/* Number */}

          <div className="col-md-4">
            <label for="cars">Choose your Qualification:</label>
            <select
              id="cars"
              name="degree"
              value={input.degree}
              className="form-control"
              onChange={handleChange}
            >
              <option value="HD">Select your Qualification</option>
              <option value="PHD">PHD</option>
              <option value="Bcom">Bcom</option>
              <option value="Diploma">Diploma</option>
              <option value="BBA">BBA</option>
            </select>
            <p className="text-danger">{errors.degree}</p>
          </div>
          {/* Dependet Dropdown */}
          <div class=" col-md-4">
            <label htmlFor="">Choose your Location:</label>
            <div className="d-flex">
              <label for="state" className="label1">
                <select
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={input.state}
                >
                  <option value="">Select State</option>
                </select>
                <p className="text-danger">{errors.state}</p>
              </label>
              <label for="district" className="label1">
                <select
                  name="district"
                  id="district"
                  onChange={handleChange}
                  value={input.district}
                >
                  <option value="">Select District</option>
                </select>
                  <p className="text-danger state-red">{errors.district}</p>
              </label>
            </div>
          </div>

          <div className="col-md-4">
            <label for="cars">Choose your Hobby:</label>
            <select
              id="hobby"
              name="hobby"
              value={input.hobby}
              className="form-control"
              onChange={handleChange}
            >
              <option value="" placeholder="Select your Hobby">
                Select your Hobby
              </option>
              <option value="Reading">Reading</option>
              <option value="Cycling">Cycling</option>
              <option value="Walking">Walking</option>
              <option value="Cricket">Cricket</option>
            </select>
            <p className="text-danger">{errors.hobby}</p>
          </div>
          {/* Radio button */}
          <div className="col-md-4">
            <label for="gender">Select your Gender:</label>
            <div className="d-flex align-item-center">
              <input
                type="radio"
                id="HTML"
                name="gender"
                className="male"
                value={"male"}
                onChange={handleChange}
              />
              <label for="html" className="malel">
                Male
              </label>
              <input
                type="radio"
                id="css"
                name="gender"
                className="female"
                value={"female"}
                onChange={handleChange}
              />
              <label for="css" className="femalel">
                Female
              </label>
            </div>
            <p className="text-danger">{errors.gender}</p>
          </div>

          {/* Addresess */}
          <Form.Label>Addresess</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={input.address || ""}
            onChange={handleChange}
            placeholder="Enter Your Addreses"
            style={{ height: "100px", width: "500px" }}
          />
          <p className="text-danger">{errors.address}</p>
          {/* </center> */}
          <div className="d-flex mx-auto justify-content-center">
            <Button type="submit" className="d-flex   ms-5">
              {isEdit ? "Update" : "Add"}{" "}
            </Button>
          </div>
        </Row>
      </Form>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th> Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Degree</th>
            <th>State</th>
            <th>City</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((student, index) => (
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.number}</td>
                <td>{student.degree}</td>
                <td>{student.state}</td>
                <td>{student.district}</td>
                <td>{student.gender}</td>
                <td>{student.hobby}</td>
                <td>{student.address}</td>
                <td>
                  <button
                    href=""
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(index)}
                  >
                    EDIT
                  </button>
                  <button
                    href=""
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(index)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default FormExample;
