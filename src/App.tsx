import './App.css';
import logo from './images/logo.svg';
import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';

// Features
// Company
// Careers
// About

// Login
// Register

// Make remote work

// Get your team in sync, no matter your location. Streamline processes,
// create team rituals, and watch productivity soar.

// Learn more

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="auth-container">
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <button>Learn more</button>
          <div className="client-container">
            <img src={databiz} alt="databiz-client" />
            <img src={audiophile} alt="audiophile-client" />
            <img src={meet} alt="meet-client" />
            <img src={maker} alt="maker-client" />
          </div>
        </div>
        <div className="hero-image"></div>
      </header>
    </>
  );
};

export default App;
