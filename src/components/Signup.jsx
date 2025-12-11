import Reac, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('https://inotebook-backend-1-6ylp.onrender.com/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/") //redirect after login
      props.showAlert("Account Created Successfully","success")
    }
    else{
      props.showAlert("Invalid credentials","danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }


  return (
    <div className='container mt-3'>
      <h2 >Create Account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control w-50" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control w-50" id="email" name='email' onChange={onChange} required aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control w-50" name='password' onChange={onChange} id="password" required minLength={8} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control w-50" name='cpassword' onChange={onChange} id="cpassword" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
