function Form(){
    return(
        
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We’ll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3 form-field">
    <input type="checkbox" id="exampleCheck1" className="check"></input>
    <label htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn-solid theme-primary">Submit</button>
</form>
         
         
    )
}
export default Form