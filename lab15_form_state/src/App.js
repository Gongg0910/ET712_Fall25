import './App.css';
import React, {useState} from 'react';

function App() {
  /* 
  // set initial state for username
  const [username, setUsername] = useState("") 
  */

  // set states for multiple inputs
  const [inputs, setInputs] = useState({})


  // function to handle changes in all inputs
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
    // update the states
    setInputs(values => ({...values, [name]: value}))
  }


  // set states for select gender
  const [myGender, setMygender] = useState("")
  // function to collect the selected gender
  const selectGender = (event) => {
    setMygender(event.target.value)
  }


  // set state for comments
  const [textcomment, setComment] = useState("")
  // function to collect the comments
  const submmiteed_comments = function(event){
    setComment(event.target.value)
  }  


  // function submit form
  const submitform = function(event){
    event.preventDefault()
  }

  return (
    <div className="App">
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Form in React JS</legend>

          <div className='formgroup'>
            <label for="name">Enter name:</label>
            <input 
              type='text' 
              id='name'
              className='inputstyle'
              name='username'
              placeholder='Type the username...'
              value={inputs.username}
              onChange={handle_changes}
            />
          </div>

          <div className='formgroup'>
            <label for="password">Enter password:</label>
            <input 
              type='password' 
              id='password'
              className='inputstyle'
              name='password'
              placeholder='Type the password...'
              value={inputs.password}
              onChange={handle_changes}
            />
          </div>

          <div className='formgroup'>
            <label for="age">Enter your age: </label>
            <input 
              type='number' 
              id='age'
              className='inputstyle'
              name='age'
              placeholder='Type in number your age...'
              value={inputs.age}
              onChange={handle_changes}
            />
          </div>

          {/* select a gender */}
          <div className='formgroup'>
            <label>Select a gender:
              <select value={myGender} onChange={selectGender}>
                <option value="female">Females</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          
          {/* comments using textare */}
          <div className='formgroup'>
            <label for="comments">Any suggestions? </label>
            <textarea
              id='comments'
              value={textcomment}
              onChange={submmiteed_comments}
              placeholder='Type your comment...'
            
            />
          </div>

          {/* submit form */}
          <input type='submit' className='btnsubmit'/>
        </fieldset>
      </form>
      {/* test the username collected after the submit button */}
      <p className='printresult'>Username = {inputs.username}</p>
      <p className='printresult'>Age = {inputs.age}</p>
      
      <p className='printresult'>Password = {inputs.password}</p>

      <p className='printresult'>Gender = {myGender}</p>
      <p className='printresult'>Comments = {textcomment}</p>


    </div>
  );
}

export default App;
