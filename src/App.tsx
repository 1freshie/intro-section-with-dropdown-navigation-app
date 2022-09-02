import './App.css';
import logo from './images/logo.svg';
import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';
import arrow_up from './images/icon-arrow-up.svg';
import arrow_down from './images/icon-arrow-down.svg';
import calendar from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';
import todo from './images/icon-todo.svg';
import { useState } from 'react';

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
  const [isFeaturesShown, setIsFeaturesShown] = useState(false);
  const [isCompanyShown, setIsCompanyShown] = useState(false);

  const showDropdownHandler = (id: string) => {
    id === 'features'
      ? setIsFeaturesShown((prevShown) => !prevShown)
      : setIsCompanyShown((prevShown) => !prevShown);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            <li className="dropdown">
              <button
                className="dropbtn"
                onClick={() => showDropdownHandler('features')}
              >
                Features
              </button>
              <div
                className={
                  !isFeaturesShown
                    ? 'dropdown-content'
                    : 'dropdown-content show'
                }
              >
                <a href="#">Todo List</a>
                <a href="#">Calendar</a>
                <a href="#">Reminders</a>
                <a href="#">Planning</a>
              </div>
            </li>
            <li className="dropdown">
              <button
                className="dropbtn"
                onClick={() => showDropdownHandler('company')}
              >
                Company
              </button>
              <div
                className={
                  !isCompanyShown ? 'dropdown-content' : 'dropdown-content show'
                }
              >
                <a href="#">History</a>
                <a href="#">Our Team</a>
                <a href="#">Blog</a>
              </div>
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
