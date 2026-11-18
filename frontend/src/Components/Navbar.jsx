function Navbar(){
    return(
    <div className="nav-overflow" data-bs-toggle="nav-overflow">
  <ul className="nav nav-pills">
    <img src="logo.jpg" alt="MYLOGO" style={{width:'50px', height:'50px'}}/>
    <li className="nav-item nav-overflow-keep">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Dashboard</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Flights</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Aircraft</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">crew</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Schedules</a>
    </li>
    <li className="nav-item nav-overflow-keep">
      <a className="nav-link" href="#">FlightRipple</a>
    </li>
    <li className="nav-item nav-overflow-keep">
      <a className="nav-link" href="#">Maintenance</a>
    </li>
    <li className="nav-item nav-overflow-keep">
      <a className="nav-link" href="#">Reports</a>
    </li>
    <li className="nav-item nav-overflow-keep">
      <a className="nav-link" href="#">Login</a>
    </li>
  </ul>
</div>
    )
}
export default Navbar