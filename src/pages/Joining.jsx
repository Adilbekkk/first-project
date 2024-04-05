import { useState } from "react";

export default function Join(){
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
    return(
        <div className="divv">
             <a  className="close" href="/">CLose</a>
            <div className="joiningtext">
                <h1>Apply for early access</h1>
                 <p>Join us to help contribute to the future of sport.We are giving a big amount of sport knowledge and community to be with</p>
            </div>
            <div className="splitterY">
            </div>
        <form onSubmit={handleSubmit} >
      <label >Enter your name: <br />
      <input className="input"
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={handleChange}
      />
      </label> <br />
      <label >Enter your email adress: <br />
        <input className="input"
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        /> 
        </label>
        <br /> <br />
        <input  className="joining" type="submit" value="Join"  />
        
    </form>
    </div>
    )
}