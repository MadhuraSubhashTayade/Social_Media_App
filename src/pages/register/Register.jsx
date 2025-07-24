import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Cub Social</h1>
          <p>
            Connect. Share. Belong. A fresh social space to post, chat, and
            build real connections — no noise, just your people. Share moments,
            meet new friends, and stay in the loop all in one place.
          </p>
          <span>Already have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
