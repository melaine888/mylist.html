import React, { useState } from "react";
import BotSpecs from "./BotSpecs";
function BotCollection({ bots, enlistedBots, enlistBot }) {
  // State to track which bot should be displayed in the BotSpecs component.
  const [showBot, setShowBot] = useState(null);
  // Handler for when a bot card is clicked, displaying the bot in the BotSpecs component.
  const handleClick = (bot) => {
    setShowBot(bot);
  };
  // State to track the selected bot class filter.
  const [selectedClass, setSelectedClass] = useState("");
  // Handler for when the bot class filter is changed.
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  // Filter the bots based on the selected class filter.
  const filteredBots = selectedClass
    ? bots.filter((bot) => bot.bot_class === selectedClass)
    : bots;
  // Render the BotSpecs component if a bot is selected.
  if (showBot) {
    return (
      <BotSpecs
        bot={showBot}
        goBack={() => setShowBot(null)}
        enlistBot={enlistBot}
      />
    );
  }
  // Render the bot collection with the filter bar and bot cards.
  return (
    <div className="bot-collection">
      <div className="filterBar">
        <select value={selectedClass} onChange={handleClassChange}>
          <option value="">Filter By Class</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div><br />
      {filteredBots.map((bot) => (
        <div key={bot.id} className="bot-card" onClick={() => handleClick(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <span>
          <i className="heartbeat icon"></i>
          {bot.health}
        </span>
        <span>
          <i className="icon lightning"></i>
          {bot.damage}
        </span>
        <span>
          <i className="shield alternate icon"></i>
          {bot.armor}
        </span>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
}
export default BotCollection;