const Contact = () => {
    return (
      <>
    <h1 style={{color:"red"}} align="center">Contact Me</h1>
      
    <form align="center">
         <label>Enter your First name: <br />
          <input type="text" />
         </label> <br /> <br />
  
         <label>Enter your Last name: <br />
          <input type="text" />
         </label> <br /> <br />
  
         <label>Enter your Email Address: <br />
          <input type="email" />
         </label> <br /> <br />
  
         <label> Enter password: <br />
          <input type="password" />
         </label> <br /> <br />
  
          <label> Confirm Password: <br />
          <input type="password" />
         </label> <br /> <br />
  
         <button type='submit'>Submit</button>
      </form>

    </>
  );
  }
  
  export default Contact;




  