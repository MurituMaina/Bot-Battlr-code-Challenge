import React from "react";
import BotCard from "./BotCard";
function BotCollection({ bot, handleBotSelect, botDelete }) {
   return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* Hosts all the bots */}
        {/* Collection of all bots */}
        
        {bot.map((botInfo) => {
          return (
            <>
              <BotCard
                bot={botInfo}
                key={botInfo.id}
                handleBotSelect={handleBotSelect}
                botDelete={botDelete}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
