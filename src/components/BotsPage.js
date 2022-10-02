import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botInfos, setBotInfos] = useState([]);
  const [botSpec, setBotSpec] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => setBotInfos(data));
  }, [botSpec]);

  function handleBotSelect(e) {
    let id = e.target.parentElement.parentElement.id;
    console.log("We are present at BotsPage");
    fetch(`http://localhost:8002/bots/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setBotSpec([...botSpec, data]);
      });
    return botSpec;
  }

  function botDelete(e) {
    let id = e.target.id;
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => setBotInfos([...botInfos, data]));
  }

  return (
    <div>
      <YourBotArmy bot={botSpec} botDelete={botDelete} />
      {/* Arrange the placing of the bots and click features and */}

      <BotCollection
        key={botInfos}
        bot={botInfos}
        botDelete={botDelete}
        handleBotSelect={handleBotSelect}
      />
    </div>
  );
}

export default BotsPage;
