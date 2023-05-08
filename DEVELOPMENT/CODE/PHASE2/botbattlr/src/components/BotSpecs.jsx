import React from "react";
function BotSpecs({ bot, goBack, enlistBot }) {
  return (
    <div className="bot-specs">
      <div className="botspec-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <button onClick={() => enlistBot(bot)}>Enlist</button>
        <button onClick={() => goBack()}>Go back</button><br/>
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
      </div>
    </div>
  );
}
export default BotSpecs;