import { useState } from "react";
// import "../styles/Auth.css";
// import "../styles/Auth-grid.css";
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const navigate=useNavigate();
  //logic
  const [isButtonDisabled] = useState(false);
  const handleSubmit = () => { navigate('/game');};
  const signIn = (e) => { navigate('/game');};

  //sample data
  const [errorMessage] = useState("Please write a Nickname");
  //const [errorMessage] = useState("Failed to create room");

  return (
    <div className="auth">
      <h1 className="auth-heading">Kick the Fool</h1>
      <h5 className="inspiration-note">
        inspired by the YouTubers
        <a
          href="https://www.youtube.com/@Reved"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Reved
        </a>{" "}
        and
        <a
          href="https://www.youtube.com/@pietsmiet"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Pietsmiet
        </a>
      </h5>
      <form className="auth-form" onSubmit={()=>handleSubmit()}>
        <div className="input-container">
          <input
            className="auth-input"
            maxLength="14"
            placeholder="type name..."
            disabled={isButtonDisabled}
          />
          <span className="tooltip-icon" style={{ fontSize: "34px" }}>
            ?
          </span>
          <div className="tooltip-text">
            Kick the Fool is a free multiplayer web game where players compete
            in a series of rounds, in which every player has to answer a
            question. After several rounds, players vote on which answer they
            find the most stupid (all in good humor). The player with the most
            votes loses a life.
          </div>
        </div>
        <p className="auth-error">{errorMessage}</p>
        <button
          className="auth-button"
          type="submit"
          disabled={isButtonDisabled}
        >
          create Room
        </button>
      </form>

      <div className="info-links">
        <a href="/contact" className="info-link">
          Contact
        </a>
        <a href="/terms-of-service" className="info-link">
          Terms of Service
        </a>
        <a href="/credits" className="info-link">
          Credits
        </a>
      </div>
    </div>
  );
};
export default Auth;
