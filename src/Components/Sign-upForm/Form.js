import "./Form.css";

function Form() {
  const handleForm = () => {
    console.log("hello");
  };
  return (
    <div className="Form">
      <form onSubmit={handleForm}>
        <div class="fields">
          <input
            class="input1"
            type="email"
            name="email"
            placeholder="Email Address or Phone Number"
          />
          <input
            class="input2"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <input class="loginbtn" type="submit" value="Log in" />
      </form>

      <div class="link">
        <a
          className="Forget-pass-link"
          href="https://reactjs.orghttps://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forgotten Password?
        </a>
      </div>
      <hr></hr>

      <div class="newaccount">
        <input class="input3" type="submit" value="Create new account"></input>
      </div>
    </div>
  );
}

export default Form;
