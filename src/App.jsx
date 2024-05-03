import { addJobs } from "./store/slices/jobs";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllJobs = async () => {
    setLoading(true);
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
    };

    try {
      const res = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      const jobs = await res.json();

      dispatch(addJobs(jobs.jdList));
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
 
    if (scrollTop + clientHeight >= scrollHeight) {
     getAllJobs();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // clean up function
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      {error != "" ? (
        <Error />
      ) : (
        <div>
          <span>{jobs.length}</span>
          {jobs.map((job) => (
            <Card key={job.jdUid} job={job} />
          ))}
          {loading && <Loading />}
        </div>
      )}
    </>
  );
}

export default App;
