import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
function App() {
  // Initialize state for bots and enlisted bots
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  // Fetch  bots from server on component mount
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);
  // Enlist a bot into army if it's not already enlisted
  const enlistBot = (bot) => {
    const botClass = bot.bot_class;
    if (!enlistedBots.some(enlistedBot => enlistedBot.bot_class === botClass)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };
  // Release a bot from army
  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(enlistedBot => enlistedBot !== bot));
  };
  // Initialize state for sorting criteria
  const [sortCriteria, setSortCriteria] = useState('health');
  // Sort bots by given criteria
  const sortBots = (bots, sortCriteria) => {
    return bots.sort((a, b) => {
      if (a[sortCriteria] < b[sortCriteria]) {
        return 1;
      } else if (a[sortCriteria] > b[sortCriteria]) {
        return -1;
      } else {
        return 0;
      }
    });
  };
  // Sort all available bots by selected criteria
  const sortedBots = sortBots(bots, sortCriteria);
  // Render the main App component with all necessary child components
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <SortBar sortCriteria={sortCriteria} onSortCriteriaChange={setSortCriteria} />
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
      <BotCollection bots={sortedBots} enlistedBots={enlistedBots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;