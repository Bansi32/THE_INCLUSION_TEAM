import React,{useEffect,useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import alanButton from '@alan-ai/alan-sdk-web';
//import Card from './Components/Shared/Card/Card';
const alanKey ="61e5ba924bae987f7daf9ab0eea834052e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [jobList, setJobList] = useState([]);
  const [form, setShowform] = useState([]);
  useEffect(() => {
    alanButton({
      key: alanKey,
      onCommand: (commandData ) => {
        if (commandData.command === 'getJobs') {
          setJobList(commandData.data);
        }
        else if (commandData.command === 'applyToJob') {
          applyToJob(commandData.data);
        }
        else {
            alanButton().playText('Please try that again...');
          }
      }
    })
  }, []);
  
  const See = () => {
        console.log('More');
        // navigate();
  }
  const applyToJob = (jobLists) => {
    setShowform((item) => {
      return [...item, jobLists];
    });
  }
  return (
    <div className="App">
      <h1>Welcome to WORK-H-EAR</h1>

        {jobList.map((job) => (
            <li key={job.id}>
              <div className="card-body">
              <h5 className="card-title">Name: {job.company}</h5>
              <p>Post: {job.post}</p>
                    <p className="card-text description1" id="xyz">JobDesc: {job.jobDescription}</p>
                    <a href={job.HR} className="card-text madeby" id="789">Hr: {job.HR}</a> 
                    <p className="card-text price" id="456">Stipend: {job.stipend}</p>
                    <button className="SeeMore" onClick={See}>Apply For</button>                           
                </div>
          </li>
        ))}
      
      
      
      { form.map((job) => (
        <li key={job.id}>
          <div className="card-body">
            <h5 className="card-title">{job.company}</h5>
            <p>Post: {job.post}</p>
                    <p className="card-text description1" id="xyz">{job.jobDescription}</p>
                    <a href={job.HR} className="card-text madeby" id="789">{job.HR}</a> 
                    <p className="card-text price" id="456">{job.stipend}</p>
                    <button className="SeeMore" onClick={See}>Apply</button>                           
          </div>
          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" id="name" />
            <label htmlFor="HIRE"></label>

            <input type="text" name="Why you want to get hired?" id="" />
            <label htmlFor="yoe">Year of Experience</label>

            <input type="text" name="Year of Experience" id="yoe" />
            <label htmlFor="project">Projects if any</label>

            <input type="text" name="Projects if any" id="project" />
            <label htmlFor="goal">Your goals</label>

            <input type="text" name="Your goals" id="goal" />
          </form>
        </li>
      ))
      }
    </div>
  );
}

export default App;
