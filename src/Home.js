import './Home.css';
function Home() {
    return (
      <div className="home">
        <h1>Welcome to My Website</h1>
        <h2>Register if not yet and Login to brwose the Website</h2>

        <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
      
      </div>
    );
  }
  
  export default Home;