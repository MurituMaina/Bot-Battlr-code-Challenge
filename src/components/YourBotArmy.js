import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy({
  bot,
  botDelete,
  handleBotSelect,
  yourArmy,
  setYourArmy,
}) {
  //your bot army code here...
  const [botItems, setBotItems] = useState([]);
  useEffect(() => {
    setBotItems(bot);
  }, [bot]);
    function handleBotSelected(e) {
    let id = e.target.parentElement.parentElement.id;
    console.log(botItems);
    botItems.map((item) => {
      if (item.id === parseInt(id)) {
        botItems.splice(botItems.indexOf(item), 1);
        console.log(botItems);
      }
      return botItems;
    });

    setBotItems([...botItems]);
    
  }
  // Your code here

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {botItems.map((botInfo, ind) => {
            return (
              <BotCard
                bot={botInfo}
                key={ind}
                handleBotSelect={handleBotSelect}
                handleBotSelected={handleBotSelected}
                botDelete={botDelete}
              />
            );
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;



/**
 * 
 * /*import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"
import BotCard from "./BotCard";

function YourBotArmy({ yourArmy,setYourArmy}) {

  function handleBotSelected(bot){
    console.log(
      "Handle bot selected"
    )
     setYourArmy((current)=>{
      let newbots=[]
      for(let i=0;i<current.length;i++){
        let current_bot=current[i]
        if(current_bot.id===bot.id){
          continue
        }
        newbots.push(current_bot)
      }
      return newbots
     })
  }

  function handleBotDelete(bot){

  }
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*//*}
          {yourArmy.map((botInfo, index) => {
            return (
              <div key={index}>
              <BotCard
                  bot={botInfo}
                  handleBotSelected={handleBotSelected}
                  botDelete={()=>handleBotDelete(botInfo)}
                />
              </div>
            );
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

 */