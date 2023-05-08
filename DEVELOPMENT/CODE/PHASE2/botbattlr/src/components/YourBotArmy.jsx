import React from 'react';
function YourBotArmy({ enlistedBots, releaseBot }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div >
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="bot-cards">
            <div className="bot-stats">
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>Class: {bot.bot_class}</p>
              <p>{bot.catchphrase}</p>           
              <span><i className="heartbeat icon"></i>{bot.health}</span>
              <span><i className="icon lightning"></i>{bot.damage}</span>
              <span><i className="shield alternate icon"></i>{bot.armor}</span>
            </div>
            <button onClick={() => releaseBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default YourBotArmy;