function Form () {
    return (
        <>
    <h1>REACT FORM</h1>
      <form>

       <label htmlFor="">Enter your name:</label>
       <input type="text" /> <br /> <br />

       <label htmlFor="">Enter your Password:</label>
       <input type="password" /> <br /> <br />

       <label htmlFor="">Confirm Password:</label>
       <input type="password" /> <br /> <br />

       <label htmlFor="">Enter your Email:</label>
       <input type="email" />

      </form>
      </>
    )
}

export default Form;