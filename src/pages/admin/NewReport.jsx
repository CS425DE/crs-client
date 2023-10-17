import { useState } from "react";
import { useNavigate } from "react-router";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";

const NewReport = () => {
  const navigate = useNavigate();

  const [report, setReport] = useState({
    startDate: "2023-02-01",
    type: "monthly",
  });

  function handleSubmit() {
    console.log(report);
    navigate("/reports");
  }

  function handleInputChange(e) {
    setReport({ ...report, [e.target.name]: e.target.value });
  }

  return (
    <div className="content1">
      <h1>New Report</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">Start Date:</label>
        <MyInput
          name="startDate"
          type="date"
          value={report.startDate}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="type">Type:</label>
        <br />
        <select
          name="type"
          id="type"
          onChange={handleInputChange}
          value={report.type}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Monthly</option>
        </select>
        <br />
        <br />
        <MyButton>Generate</MyButton>
      </form>
    </div>
  );
};

export default NewReport;
