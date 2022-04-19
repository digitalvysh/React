import './App.css';
function App(props) {
  const { employee } = props;
  return (
    <div className="container">
      {/* Start your React code here */}
      <div className="profile">
        <img src={employee.profileImg} alt={'Employee Profile'} />
        <div className="employeeName">{employee.name}</div>
        <label htmlFor="">Location</label>
        <div className="employeeLocation">{employee.location}</div>
        <label htmlFor="">Blood group</label>
        <div className="employeeBloodGroup">{employee.bloodGroup}</div>
        <label htmlFor="">Age</label>
        <div className="employeeAge">{employee.age}</div>
      </div>
    </div>
  );
}
export default App;