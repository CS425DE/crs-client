import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReportService from "../../API/ReportService";
import MyButton from "../../components/UI/button/MyButton";

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reports = await ReportService.getAll();
      setReports(reports.data);
    };
    fetchData();
  }, []);

  function handleDelete() {
    console.log("delete");
  }

  return (
    <div className="content1">
      <div>
        <h1>Reports</h1>
        <Link to="/reports/new">
          <MyButton>Create New Report</MyButton>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Status</th>
            <th>Report Url</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td>
              <td>{report.type}</td>
              <td>{report.status}</td>
              <td>{report.reportUrl}</td>
              <td>{report.createdAt}</td>
              <td>
                <MyButton onClick={handleDelete}>Delete</MyButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportList;
