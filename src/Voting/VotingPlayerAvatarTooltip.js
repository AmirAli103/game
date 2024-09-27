import React from 'react';

export const VotingPlayerAvatarTooltip = ({ votingData, playerID }) => {
  // Get the data for the specific playerID
  const playerData = votingData[playerID];
  if (!playerData) {
    return null; // Return null or alternative UI if no data is available
  }  

  let formattedOutput = "";

  // Loop through all questions and answers
  const questionKeys = Object.keys(playerData);
  questionKeys.forEach((questionKey, index) => {
    const questionData = playerData[questionKey];
    
    // Extract the question number from the key (e.g., "question1" -> "1")
    const questionNumber = questionKey.replace(/\D/g, '');
    formattedOutput += `${questionNumber}: ${questionData.Question}\nAnswer: ${questionData.Answer}`;
    
    // Add additional spacing between questions
    if (index < questionKeys.length - 1) {
      formattedOutput += "\n\n";
    }
  });

  return (
    <div className="Voting-player-avatar-tooltip">
      {formattedOutput.split('\n').map((line, index) => (
        <div key={index}>{line === "" ? <br /> : line}</div>
      ))}
    </div>
  );
};
