import React from 'react';
import './register.css';

function Register() {
  return (
<div>
<form>
<h1>Register</h1>
<p>Please fill in this form to create an account.</p>
<hr/>
Name:
<input type="text" placeholder="Enter Name" name="email" id="email" required></input><br/>
Date-Of-Birth:
<input type="text" placeholder="Enter DOB" name="email" id="email" required></input><br/>
Address:
<input type="text" placeholder="Enter Address" name="email" id="email" required></input><br/>
Contact:
<input type="text" placeholder="Enter Contact-Detail" name="email" id="email" required></input><br/>
Email:
<input type="text" placeholder="Enter Email" name="email" id="email" required></input><br/>

<button type="submit" >Register</button>
</form>
</div>
  );
}

export default Register;