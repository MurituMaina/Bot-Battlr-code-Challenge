import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bot, handleBotSelect, botDelete, setYourArmy }) {
  function handleSetYourArmy(bot) {
    setYourArmy((current) => {
      let botExists = false;
      for (let i = 0; i < current.length; i++) {
        let currentBot = current[i];
        if (currentBot.id === bot.id) {
          botExists = true;
          break;
        }
      }

      if (botExists === false) {
        let newBots = [...current];
        newBots.push(bot);
        return newBots;
      }
      return current;
    });
  }
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* Hosts all the bots */}
        {/* Collection of all bots */}

        {bot.map((botInfo, index) => {
          return (
            <BotCard
              bot={botInfo}
              key={index}
              onClick={() => handleSetYourArmy(botInfo)}
              handleBotSelect={handleBotSelect}
              botDelete={botDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;



/*/}

/*import React from "react";
import BotCard from "./BotCard";
import { v4 as uuidv4 } from "uuid"

function BotCollection({ bot, handleBotSelect, botDelete,setYourArmy }) {

  function handleSetYourArmy(bot){
    
     setYourArmy((current)=>{
      let botExists=false
      for(let i=0;i<current.length;i++){
        let currentBot=current[i]
        if(currentBot.id===bot.id){
          botExists=true;
          break 
        }
      }

      if(botExists===false){
        let newBots=[...current]
        newBots.push(bot)
        return newBots
      }
      return current
     })
  }


   return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/ /*}
/* { Hosts all the bots */
        /*{ Collection of all bots */ /*}
        
        {bot.map((botInfo,index) => {
          return (
            <div key={index} onClick={()=>handleSetYourArmy(botInfo)}>
              <BotCard
                bot={botInfo}
                handleBotSelect={handleBotSelect}
                botDelete={botDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );1q  Ax
}

export default BotCollection;
*/
