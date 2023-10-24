import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { StudentList } from './Studentlist';

export default function EditStudent() {
  const [errors, setErrors] = useState({});
  const [StudentList, setStudentList] = useState(JSON.parse(localStorage.getItem("studentlist")))
  const id = useParams();
  const [student, setStudent] = useState(StudentList[id.id]);
  const [input, setInput] = useState(student);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

  };
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let errorMessages = {};

    if (!input.stname || input.stname.trim() === '') {
      errorMessages.stname = 'Student name is required';
      isValid = false;
    }
    if (!input.gender || input.gender === 'Select Your Gender') {
      isValid = false;
      errorMessages.stclass = 'Please select Your Gender';
  }
    if (!input.mark ||input.mark >= 101 || input.maths<0){
      isValid = false;
      errorMessages.mark = 'Please Enter Valid Mark';
  }
  if(input.cnumber.length != 10){
      isValid = false;
      errorMessages.cnumber = 'Please Enter Valid Number';
  }


    setErrors(errorMessages);
    return isValid;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
    StudentList[id.id] = input;
    localStorage.setItem("studentlist", JSON.stringify(StudentList));
    navigate("/student");
    }
  };
  return (
    <div class="ubdate" id="edit">
      <form action="" onSubmit={handleUpdate}>
        <h1 class="text-center fw-bolder mt-3">Edit Students</h1>
        <div class="mx-auto my-3 col-6 border p-3 rounded">
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Student name</label><br />
            <input class="form-control p-2 fs-4" id="Student-name" name="stname" value={input ? input.stname : ""} type="text" onChange={handleChange} />
            {errors.stname && <div className="text-danger">{errors.stname}</div>}
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Student Gender</label>
            <select class="form-select fs-4 p-2 text-muted" aria-label="Default select example"
              id="Student-class" onChange={handleChange} name='gender' value={input ? input.gender : ""}>
              <option selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </div><br />
                    
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Date of Birth : </label>
            <input type="date" class="fs-4 text-muted p-2 border-0" id="dob" onChange={handleChange} name="stdob" value={input ? input.stdob : ""} required/>
          </div><br />

          <h2 class="fw-bolder">Parents/Guardian's details</h2>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Father's Name</label>
            <input class="form-control p-2 fs-4" id="Father-Name" type="text" onChange={handleChange} name="fname" value={input ? input.fname : ""}  required/>
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Mother's Name</label>
            <input class="form-control p-2 fs-4" id="Mother-name" type="text" onChange={handleChange} name="mname" value={input ? input.mname : ""} required/>
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Contect Number</label>
            <input class="form-control p-2 fs-4" id="contect-number" type="number" onChange={handleChange} name="cnumber" value={input ? input.cnumber : ""} />
            {errors.cnumber && <div className="text-danger">{errors.cnumber}</div>}
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Address</label>
            <input class="form-control p-2 fs-4" id="address" type="text" onChange={handleChange} name="address" value={input ? input.address : ""}required />
          </div><br />
          <div class="col-4">
            <h2 class="fw-bolder">Student Mark</h2>
            <label for="" class="text-muted fs-4">Mark</label>
            <input type="number" class="form-control p-2 fs-4" id="maths" onChange={handleChange} name="mark" value={input ? input.mark : ""} />
            {errors.mark && <div className="text-danger">{errors.mark}</div>}
            <label for="" class=" text-muted fs-4">Email</label> <br />
                        <input type="email " class="form-control p-2 fs-4" name="uEmail" id="uEmail"
                            onChange={handleChange} value={input ? input.uEmail : ""} required /><br />
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-success fs-4 fw-bolder px-5 py-2 " id="add-btn"
            >Update</button>
          </div>
        </div>
      </form>
    </div>


  )
}
