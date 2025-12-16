import React, { useState } from 'react'
import "./dashboard.css"
import { useJobs } from '../context/jobcontext'
import AddJob from './AddJob';

const Dashboard = () => {
    const {jobs}=useJobs();
    const [showModal,setShowModal]=useState(false);
  return (
    <div className='dashboard'>
      <div className="sidebar">
        <button className="add-btn" onClick={()=>setShowModal(true)}>Add Job</button>
      </div>
      {showModal && <AddJob onClose={()=>setShowModal(false)}/>}
      <div className="main">
        <div className="summary">
            <div className="card yellow">
                Total
            </div>
            <div className="card green">
                Ongoing
            </div>
            <div className="card red">
                Completed
            </div>
        </div>
            <table className="job-table">
                <thead>
                    <tr>
                        <th>Companies</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Dates</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job=>(
                    <tr key={job.id}>
                        <td>{job.company}</td>
                        <td>{job.role}</td>
                        <td>{job.status}</td>
                        <td>{job.date}</td>
                        <td><button className="notes-btn">Notes</button></td>
                        <td><button className="update-btn">Update</button>
                        <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        
      </div>
    </div>
  )
}

export default Dashboard
