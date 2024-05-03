import { addJobs } from "./store/slices/jobs";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Grid from "@mui/material/Grid";
import Filters from "./components/Filters";

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
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
 
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
    <main style={{ paddingLeft: "16px", paddingRight: "16px",backgroundColor:"rgb(250,250,250)" }}>
      <Filters/>
      {error !== "" ? (
        <Error />
      ) : (
        <Grid container spacing={6}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
              <Card job={job} />
            </Grid>
          ))}
        </Grid>
      )}
          <div style={{marginTop:"48px"}}>
          {loading && <Loading />}
          </div>
    </main>
  );
}

export default App;
