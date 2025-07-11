import { useState, useEffect } from 'react';
import { BtnContainer } from './BtnContainer';
import { JobInfo } from './JobInfo';  

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchJobs();
  }, []);
  
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return <section className='jobs-center'>
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
    <JobInfo jobs={jobs} currentItem={currentItem} />
  </section>;
};

export default App;
