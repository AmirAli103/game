// import "../styles/Auth.css";
import { FaRegHandPointLeft } from "react-icons/fa6";
// import { VotingPlayerAvatarTooltip } from "./sections/VotingPlayerAvatarTooltip";
// import { VolumeSlider } from "./sections/VolumeSlider";
// import "../styles/Voting.css";
import { useState } from "react";
import { GiBrain } from "react-icons/gi";
import { createAvatar } from "@dicebear/core";
import { dylan } from "@dicebear/collection";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { VotingPlayerAvatarTooltip } from "./VotingPlayerAvatarTooltip";

export const Voting = () => {
  //logic
  const navigate = useNavigate()
  const [votingPhase] = useState("Voting Ends In: ");
  const [votingData] = useState({
    1: {
      question1: {
        Question: "In which year was NATO founded?",
        Answer: "1949",
      },
      question2: {
        Question:
          "What is the name of the game where you are not allowed to click on small mines?",
        Answer: "Minesweeper",
      },
      question3: {
        Question:
          "Which princess is featured in almost every Super Mario game?",
        Answer: "Princess Peach",
      },
      question4: {
        Question: "How many players does a baseball team have on the field?",
        Answer: "45 minutes",
      },
      question5: {
        Question: "What is Lightning McQueen’s starting number in Cars?",
        Answer: "95",
      },
    },
    2: {
      question1: {
        Question: "test",
        Answer: "test",
      },
    },
    3: {
      question1: {
        Question: "In which year was NATO founded?",
        Answer: "1949",
      },
      question2: {
        Question:
          "What is the name of the game where you are not allowed to click on small mines?",
        Answer: "Minesweeper",
      },
      question3: {
        Question:
          "Which princess is featured in almost every Super Mario game?",
        Answer: "Princess Peach",
      },
    },
  });
  const [hasVoted, setHasVoted] = useState(false);

  const [volume, setVolume] = useState(50);
  const [questionTime] = useState(30);
  const [count] = useState(questionTime);
  const renderBrains = (numLives) => {
    return Array.from({ length: numLives }, (_, i) => (
      <GiBrain key={i} style={{ color: "gray", marginRight: "2px" }} />
    ));
  };
  const voteForPlayer = async () => { };
  const getPlayerIndexById = (playerID, playersArray) => {
    for (let i = 0; i < playersArray.length; i++) {
      if (playersArray[i].playerID === playerID) {
        return i;
      }
    }
    return -1;
  };
  const getPlayerById = (playerID, playersArray) => {
    for (let i = 0; i < playersArray.length; i++) {
      if (playersArray[i].playerID === playerID) {
        return playersArray[i];
      }
    }
    return -1;
  };

  // Example
  let uid = "1";
  const players = [
    {
      playerID: "1",
      playerName: "A",
      isCreator: true,
      lives: 3,
      votedBy: [],
    },
    {
      playerID: "2",
      playerName: "Bobby",
      isCreator: false,
      lives: 0,
      votedBy: [],
    },
    {
      playerID: "3",
      playerName: "AAAAAAAAAAAA",
      isCreator: false,
      lives: 5,
      votedBy: ["1", "2"],
    },
    //3-12 players
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
    <div className="Voting-container">
      {/* <VolumeSlider
        className="Voting-VolumeSlider"
        Lobby-settings-box={volume}
        volume={volume}
        setVolume={setVolume}
      /> */}
      <h1 className="Voting-time">
        {votingPhase}
        {count}
      </h1>

      <div className="Voting-player-list">
        {players.map((player, index) => (
          <div
            className={`Voting-player ${player.lives <= 0 ? "grayed-out" : ""}`}
            key={player.playerName}
          >
            <div className="Voting-player-avatar-container">
              <img
                className="Voting-player-avatar"
                src={avatars[index]}
                alt="Avatar"
              />
              {/* {votingData && (
                <VotingPlayerAvatarTooltip
                  votingData={votingData}
                  playerID={player.playerID}
                />
              )} */}
            </div>
            <h3 className="Voting-player-name" style={{ position: "relative" }}>
              {player.playerID === uid ? (
                <span style={{ backgroundColor: "yellow" }}>
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
                <span style={{ position: "relative", display: "inline-block" }}>
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
              <br />
              {renderBrains(player.lives)}
            </h3>
            {player.votedBy.length > 0 && (
              <div className="Voting-voters-list">
                {player.votedBy.map((voterID) => (
                  <span key={voterID} className="Voter-id">
                    <img
                      className="Voting-voted-by-avatar"
                      src={avatars[getPlayerIndexById(voterID, players)]}
                      alt="Avatar"
                    />
                  </span>
                ))}
              </div>
            )}

            {player.playerID !== uid && player.lives > 0 && (
              <button
                disabled={hasVoted || getPlayerById(uid, players).lives <= 0}
                className="Voting-button"
                onClick={() => voteForPlayer(player.playerID)}
              >
                <FaRegHandPointLeft className="Voting-point-left-icon" />
              </button>

            )}
            {/* {players.map((player) => ( */}
              <div>
                {/* Other player details */}

                {/* Render the tooltip only if you need to display it */}
                <VotingPlayerAvatarTooltip
                  votingData={votingData}
                  playerID={player?.playerID}
                />
              </div>
            {/* ))} */}
          </div>

        ))}
        <button
          disabled={hasVoted || getPlayerById(uid, players).lives <= 0}
          className="Back-to-Lobby-button"
          onClick={() => { navigate('/Winner') }}
        >
          See Winner
        </button>

      </div>
    </div>
  );
};
