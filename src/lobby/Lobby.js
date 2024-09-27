// import { VolumeSlider } from "./sections/VolumeSlider";
// import "../styles/Lobby.css";
// import "../styles/Lobby-grid.css";
import { createAvatar } from "@dicebear/core";
import { dylan } from "@dicebear/collection";
import { useMemo } from "react";
import { useState } from "react";

export const Lobby = () => {
  //logic
  const [isButtonDisabled] = useState(false);
  const [volume, setVolume] = useState(50);
  const [lives] = useState(3);
  const [rounds] = useState(4);
  const [questionTime] = useState(30);
  const [votingTime] = useState(20);
  const [language] = useState("german");
  const roomID = "-O6R2fVyIIc-Dtcy-d17";

  const copyToClipboard = () => {};
  const handleLivesChange = (e) => {};
  const handleRoundsChange = (e) => {};
  const handleQuestionTimeChange = (e) => {};
  const handleVotingTimeChange = (e) => {};
  const handleLanguageChange = (e) => {};
  const handleGameStart = async (e) => {};

  //Example
  const [isCreator] = useState(true);
  const [playerNumber] = useState(2);
  let uid = "1";
  const players = [
    {
      playerID: "1",
      playerName: "A",
      isCreator: true,
    },
    {
      playerID: "2",
      playerName: "Bobby",
      isCreator: false,
    },
    {
      playerID: "AAAAAAAAAAAA",
      playerName: "Bob",
      isCreator: false,
    },

    /*
    {
      playerID: "3",
      playerName: "Charlie",
      isCreator: false,
    },
    */
  ];

  // create avatars
  // https://www.dicebear.com
  const avatars = useMemo(() => {
    return players
      ? players.map((player) =>
          createAvatar(dylan, {
            size: 50,
            seed: player.playerName,
            backgroundColor: [],
          }).toDataUri()
        )
      : [];
  }, [players]);

  return (
    <div className="lobby-container">
      <div className="Lobby-settings-box">
        {/* <VolumeSlider
          className="Lobby-VolumeSlider"
          volume={volume}
          setVolume={setVolume}
        /> */}
        <h1 className="lobby-title">Game Settings</h1>
        <form id="gameSettingsForm">
          <label>Lives:</label>
          <select
            id="livesInput"
            name="lives"
            required
            disabled={!isCreator}
            value={lives}
            onChange={handleLivesChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <br />
          <label>Rounds until Voting:</label>
          <select
            id="roundsInput"
            name="rounds"
            required
            disabled={!isCreator}
            value={rounds}
            onChange={handleRoundsChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label>Time per Question:</label>
          <select
            id="timePerQuestionInput"
            name="timePerQuestion"
            required
            disabled={!isCreator}
            value={questionTime}
            onChange={handleQuestionTimeChange}
          >
            <option value="5">5s</option>
            <option value="10">10s</option>
            <option value="20">20s</option>
            <option value="30">30s</option>
            <option value="40">40s</option>
            <option value="50">50s</option>
            <option value="60">60s</option>
            <option value="90">90s</option>
            <option value="120">120s</option>
            <option value="150">150s</option>
            <option value="180">180s</option>
          </select>
          <br />
          <label>Voting Time:</label>
          <select
            id="Voting Time Input"
            name="Voting Time"
            required
            disabled={!isCreator}
            value={votingTime}
            onChange={handleVotingTimeChange}
          >
            <option value="10">10s</option>
            <option value="20">20s</option>
            <option value="30">30s</option>
            <option value="40">40s</option>
            <option value="50">50s</option>
            <option value="60">60s</option>
            <option value="90">90s</option>
            <option value="120">120s</option>
            <option value="150">150s</option>
            <option value="180">180s</option>
          </select>
          <br />
          <label>Language:</label>
          <select
            id="languageInput"
            name="languageInput"
            required
            disabled={!isCreator}
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="english">English</option>
            <option value="german">German</option>
          </select>
          <br />
        </form>
        {isCreator && (
          <button
            className="lobby-start-button"
            onClick={handleGameStart}
            disabled={!isCreator || playerNumber < 3 || isButtonDisabled}
          >
            Start
          </button>
        )}
      </div>
      <p className="Lobby-playernumber">{playerNumber}/12</p>
      {playerNumber < 3 && (
        <p className="Lobby-minimal-playernumber">
          You need at least 3 players to start the game
        </p>
      )}
      <div className="Lobby-player-list">
        {players &&
          players.map((player, index) => (
            <div className="Lobby-player" key={player.playerID}>
              <img src={avatars[index]} alt="Avatar" />
              <h3
                className="Lobby-player-name"
                style={{ position: "relative" }}
              >
                {player.playerID === uid ? (
                  <span
                    style={{
                      backgroundColor: "yellow",
                      display: "inline-block",
                      padding: "0 5px",
                    }}
                  >
                    {player.playerName}
                    {player.isCreator && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "-5px",
                          fontSize: "17px",
                        }}
                      >
                        👑
                      </span>
                    )}
                  </span>
                ) : (
                  <span
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {player.playerName}
                    {player.isCreator && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "-5px",
                          fontSize: "17px",
                        }}
                      >
                        👑
                      </span>
                    )}
                  </span>
                )}
              </h3>
            </div>
          ))}
      </div>

      <div className="Lobby-invitation-link">
        <p>
          Invitation link: https://{window.location.hostname}:3000/room/
          {roomID}
        </p>
        <button onClick={copyToClipboard}>Copy link</button>
      </div>
    </div>
  );
};
