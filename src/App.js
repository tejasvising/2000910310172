import logo from './logo.svg';
import './App.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
function App() {
  return (
    <div className="App">
     
 

  <h1>All Employee Details</h1>
  <div><a href="">Add New Detail of an Employee</a></div>

   
      
     
        <div className='card' mb-3>
          <div className='row'>
            <div className='col-md-4'>
            employee.name <span style='float:right' id='test'>Salary after deduction:employee.actual_salary</span>
            </div>
            <div className="col-md-8"><div className="card-body">
              <h5 className="card-title">
             EMPCODE: employee.empcode
              </h5><p className="card-text">Present for: employee.present days</p><span style='float:right'>Absent for: employee.absent days</span>
              <p className='card-text'>Salary before deduction: <span style='float:right'>SDM:</span></p>
              <p className="card-text"><small className="text-muted">,mployee.year</small></p>
              
            </div></div>
          </div>
        </div>
    </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
export default App;
