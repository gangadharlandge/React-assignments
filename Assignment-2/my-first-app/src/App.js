
import './App.css';


const employee={
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }
  

function App() {
  return (
  <>
    <div className="img-container">
      
        <img src={employee.profileImg} className="profilePic" alt="profilePic" />
    </div>
    <h1 className="employeeName">{employee.name}</h1>
    <form>
      <label htmlFor="location">Location</label>
      <br />
      <li> {employee.location} </li>
      <label htmlFor="bloodgroup"> Bloodgroup </label>
      <br />
      <li> {employee.bloodGroup} </li>
      <label htmlFor="age"> Age </label> <br />
      <li> {employee.age} </li>

    </form>
  </>
  );
}

export default App;
