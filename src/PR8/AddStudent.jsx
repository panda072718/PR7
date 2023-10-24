import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './pr8.css'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("studentlist")) || [];
    });
    useEffect(() => {
        localStorage.setItem("studentlist", JSON.stringify(data));

    }, [data]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (!input.stname) {
            isValid = false;
            errors.stname = 'Student name is required';
        }

        if (!input.gender || input.gender === 'Select Your Gender') {
            isValid = false;
            errors.gender = 'Please select Your Gender';
        }
        if (!input.mark || input.mark >= 101 || input.mark < 0) {
            isValid = false;
            errors.mark = 'Please Enter Valid Mark';
        }
        if (!input.cnumber || input.cnumber.length != 10) {
            isValid = false;
            errors.cnumber = 'Please Enter Valid Number';
        }

        // Add more validation rules for other fields as needed

        setErrors(errors);
        return isValid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Update local storage
            const updatedData = [...data, input];
            localStorage.setItem("studentlist", JSON.stringify(updatedData));
            // Navigate to "/student" page
            navigate("/student");
        }
    };

    return (
        <div className="main">
            <form id="registerForm" onSubmit={handleSubmit}>
                <h1 class="text-center fw-bolder mt-3">Add Students</h1>
                <div className="mb-2">
                    <label className="text-muted fs-4">Student name</label><br />
                    <input className="form-control p-2 fs-4" name="stname" type="text" onChange={handleChange} />
                    {errors.stname && <div className="text-danger">{errors.stname}</div>}
                </div>
                <div className="mb-2">
                    <label className="text-muted fs-4">Gender</label>
                    <select className="form-select fs-4 p-2 text-muted" onChange={handleChange} name="gender">
                        <option defaultValue>Select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </select>

                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-4">Date of Birth : </label>
                    <input type="date" class="fs-4 text-muted p-2 border-0" id="dob" onChange={handleChange} name="stdob" />

                </div><br />
                <h2 class="fw-bolder">Parents/Guardian's details</h2>
                <div class="mb-2">
                    <label for="" class="text-muted fs-4">Father's Name</label>
                    <input class="form-control p-2 fs-4" id="Father-Name" type="text" onChange={handleChange} name="fname" />
                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-4">Mother's Name</label>
                    <input class="form-control p-2 fs-4" id="Mother-name" type="text" onChange={handleChange} name="mname" />
                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-4" maxlength="10" minlength="2">Contect Number</label>
                    <input class="form-control p-2 fs-4" id="contect-number" type="number" onChange={handleChange} name="cnumber" />
                    {errors.cnumber && <div className="text-danger">{errors.cnumber}</div>}
                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-4">Address</label>
                    <input class="form-control p-2 fs-4" id="address" type="text" onChange={handleChange} name="address" />
                </div><br />
                <div class="col-4">
                    <label for="" class="text-muted fs-4">Mark</label>
                    <input type="number" class="form-control p-2 fs-4" id="maths" onChange={handleChange} name="mark" />
                    {errors.mark && <div className="text-danger">{errors.mark}</div>}


                    <h4 id="mark-error" class="text-danger pt-2"></h4>
                </div>

                <div>

                    <label for="uEmail" class="form-label text-muted fs-4">Email</label> <br />
                    <input type="email " class="form-control p-2 fs-4" name="uEmail" id="uEmail"
                        onChange={handleChange} required /><br />

                    
                </div>
                <button className="btn btn-primary fs-4 text-white fw-bolder" id="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;



