import { addJobs } from "./store/slices/jobs";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";
import { useEffect } from "react";
function App() {
  
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs);
  
  const getAllJobs = async () => {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
    };

    const res = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );

    const jobs = await res.json();

    dispatch(addJobs(jobs.jdList));
  };
  
  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      {jobs.map((job) => (
        <Card key={job.jdUid} job={job} />
      ))}
    </>
  );
}

export default App;
