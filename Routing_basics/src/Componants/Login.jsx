
function Login() {
  return (
    <div className="form-page">
      <div className="form-card">
        <div className="form-icon">👋</div>

        <h1>Welcome Back!</h1>

        <p className="form-description">
          Please enter your details to sign in.
        </p>

        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="forgot-password">
              Forgot password?
            </span>
          </div>

          <button type="button" className="form-button">
            Login
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button type="button" className="google-button">
          Continue with Google
        </button>

        <p className="form-footer">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
