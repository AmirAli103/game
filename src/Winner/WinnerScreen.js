// import "../styles/WinnerScreen-grid.css";

// import { VolumeSlider } from "./sections/VolumeSlider";
import { useState } from "react";
import { createAvatar } from "@dicebear/core";
import { dylan } from "@dicebear/collection";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const WinnerScreen = () => {
  const navigate=useNavigate();
  //logic
  const [isButtonDisabled] = useState(false);
  const transitionToLobby = () => {navigate('/lobby')};

  //Example
  const [isCreator] = useState(true);
  let uid = "1";
  const winner1 = {
    playerID: "1",
    playerName: "A",
    isCreator: true,
  };
  const winner2 = {
    playerID: "2",
    playerName: "Bobby",
    isCreator: false,
  };

  const [volume, setVolume] = useState(50);
  // create avatars
  // https://www.dicebear.com
  const avatar1 = useMemo(() => {
    return createAvatar(dylan, {
      size: 70,
      seed: winner1.playerName,
      backgroundColor: [],
    }).toDataUri();
  }, [winner1]);

  const avatar2 = useMemo(() => {
    return createAvatar(dylan, {
      size: 70,
      seed: winner2.playerName,
      backgroundColor: [],
    }).toDataUri();
  }, [winner2]);
  return (
    <div className="WinnerScreen-container">
      {/* <VolumeSlider
        className="WinnerScreen-VolumeSlider"
        Lobby-settings-box={volume}
        volume={volume}
        setVolume={setVolume}
      /> */}
      <span className="trophy-emoji1">🏆</span>
      <div className=" Winning-Player1">
        <img src={avatar1} alt="Avatar" />
        {winner1.playerID === uid ? (
          <h3 className="Winner1-name">
            <span
              style={{
                backgroundColor: "yellow",
                display: "inline-block",
                padding: "0 5px",
              }}
            >
              {winner1.playerName}
            </span>
          </h3>
        ) : (
          <h3 className="Lobby-player-name">{winner1.playerName}</h3>
        )}
      </div>
      <span className="trophy-emoji2">🏆</span>
      <div className=" Winning-Player2">
        <img src={avatar2} alt="Avatar" />
        {winner2.playerID === uid ? (
          <h3 className="Winner2-name">
            <span
              style={{
                backgroundColor: "yellow",
                display: "inline-block",
                padding: "0 5px",
              }}
            >
              {winner2.playerName}
            </span>
          </h3>
        ) : (
          <h3 className="Lobby-player-name">{winner2.playerName}</h3>
        )}
      </div>
      <button
        disabled={!isCreator || isButtonDisabled}
        className="Back-to-Lobby-button"
        onClick={transitionToLobby}
      >
        back to lobby
      </button>
      <button
        disabled={!isCreator || isButtonDisabled}
        className="Back-to-Lobby-button"
        onClick={()=>{navigate('/Lobby')}}
      >
        See Winner
      </button>
    </div>
  );
};
