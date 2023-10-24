import react from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function RegistrationForm() {
 

  return (
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
  );
}

export default RegistrationForm;