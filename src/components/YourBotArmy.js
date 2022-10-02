import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bot, botDelete }) {
  //your bot army code here...
  const [botItems, setBotItems] = useState([]);
  useEffect(() => {
    setBotItems(bot);
  }, [bot]);

  function handleBotSelected(e) {
    let id = e.target.parentElement.parentElement.id;
    botItems.map((item) => {
      if (item.id === parseInt(id)) {
        botItems.splice(botItems.indexOf(item), 1);
      }
      return botItems;
    });

    setBotItems([...botItems]);
    console.log(botItems);
  }
  // Your code here

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {botItems.map((botInfo, ind) => {
            return (
              <>
                <BotCard
                  bot={botInfo}
                  key={botInfo.id}
                  handleBotSelected={handleBotSelected}
                  botDelete={botDelete}
                />
              </>
            );
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
