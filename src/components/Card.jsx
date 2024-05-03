import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";



export default function BasicCard({ job }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Chip label="⏳Posted 10 days ago" size="small" variant="outlined" />
        <div style={{ display: "flex", gap:"16px", marginTop: "16px", marginBottom: "16px" }}>
          <img src={job.logoUrl} width="50px" height="50px"/>
          <div>
          <Typography variant="h5" component="div">
            {job.companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.jobRole}
              </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.location}
              </Typography>
          </div>
        </div>
        <Typography variant="body2" color="text.secondary">
          Estimated Salary: {job.minJdSalary == null ? 10 : job.minJdSalary} - {job.maxJdSalary} LPA ✅
          </Typography>
          <Typography marginTop={1} variant="body2" color="text.primary">
            About Company :
          </Typography>
          <h3>About us</h3>
          <Typography>
            {job.jobDetailsFromCompany}
          </Typography>
          <Typography marginTop={1} variant="body2" color="text.secondary">
            Minimum Experience
          </Typography>
          
          <Typography marginTop={1} variant="body2" color="text.primary">
            {job.minExp == null ? 1 : job.minExp } years
          </Typography>
          <Button variant="contained" style={{width:"100%",marginTop:"8px",backgroundColor:"rgb(0, 230, 150)", paddingTop:"10px", paddingBottom:"10px"}}>⚡Easy Apply</Button>
          <Button variant="contained" style={{width:"100%",marginTop:"8px",backgroundColor:"rgb(0,150, 250)", paddingTop:"10px", paddingBottom:"10px"}}>Unlock Referrals ask</Button>
      </CardContent>
    </Card>
  );
}
