
function Resister() {
  return (
    <div className="form-page">
      <div className="form-card register-card">
        <div className="form-icon">✨</div>

        <h1>Create Account</h1>

        <p className="form-description">
          Join us and start your journey today.
        </p>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <label className="terms">
            <input type="checkbox" />
            I agree to the Terms and Conditions
          </label>

          <button type="button" className="form-button">
            Create Account
          </button>
        </form>

        <p className="form-footer">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Resister;

