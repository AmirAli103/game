import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth/Auth.js';
import HomePage from './Components/HomePage.js';
import AuthJoin from './Auth/AuthJoin.js';
import { Game } from './Game/Game.js';
import { Voting } from './Voting/Voting.js';
import { WinnerScreen } from './Winner/WinnerScreen.js';
import { Lobby } from './lobby/Lobby.js';
import { VotingPlayerAvatarTooltip } from './Voting/VotingPlayerAvatarTooltip.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authjoin" element={<AuthJoin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Voting" element={<Voting />} />
        <Route path="/Winner" element={<WinnerScreen />} />
        <Route path="/Lobby" element={<Lobby />} />
        <Route path="/votingAvatar" element={<VotingPlayerAvatarTooltip />} />

      </Routes>
    </Router>
  );
}

export default App;
