import React, { createContext, useContext, useEffect, useState } from 'react'

const JobContext=createContext();
 export function JobProvider({children}){
    const [jobs,setJobs]=useState(()=>{
        const saved=localStorage.getItem("jobs");
        return saved ? JSON.parse(saved):[];
    });
    useEffect(()=>{
        localStorage.setItem("jobs",JSON.stringify(jobs));
    },[jobs]);

    function addJob(job){
        setJobs(prev=>[...prev,{id:Date.now(),...job}]);
    }
    function updateJob(id,updated){
        setJobs(prev=>prev.map(j=>(j.id===id? {...j,...updated}:j)));
    }
    function deleteJob(id){
        setJobs(prev=>prev.filter(j=>j.id !==id));
    }
    return (
        <JobContext.Provider value={{jobs,addJob,updateJob,deleteJob}}>{children}</JobContext.Provider>
    );
 }
 export function useJobs(){
    return useContext(JobContext);
 }
