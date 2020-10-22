import React from 'react';
import './update.css';

function Update() {
  return (
    <div>
        <br/>
        <br/>
        <h1>Update Patient Record</h1><br/>
        <form>
      Enter Patient Id: <input type="text" id="fname" name="fname"></input>
     <input type="submit" id='b1' value="Submit"></input>
        </form>
    
    </div>
  );
}

export default Update;