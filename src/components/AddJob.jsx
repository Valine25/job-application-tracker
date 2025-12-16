import "./AddJob.css"
import React, { useState } from 'react'
import {useJobs} from "../context/jobcontext"
const AddJob = ({onClose}) => {
    const {addJob}=useJobs();
    const [form,setForm]=useState({
        company:"",
        role:"",
        status:"Ongoing",
        date:"",
    });
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    function handleSubmit(){
        if(!form.company || !form.role || !form.date){
            alert("Please fill all required fields");
            return;
        }
        addJob(form);
        onClose();
    }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New  Job</h2>
        <label>Company</label>
        <input name="company" value={form.company} onChange={handleChange}/>
        <label>Role</label>
        <input name="role" value={form.role} onChange={handleChange}/>
        <label>Status</label>
        <select name="status" value={form.status} onChange={handleChange}>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Rejected</option>
            <option>Applied</option>
        </select>
        <label>Dates</label>
        <input type="date" name="date" value={form.date} onChange={handleChange}/>
        <div className="btn-row">
            <button className="cancel" onClick={onClose}>Cancel</button>
            <button className="save" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddJob
