import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botInfos, setBotInfos] = useState([]);
  const [botSpec, setBotSpec] = useState([]);
  // const [deleted, setDeleted] = useState(true);
  const [yourArmy, setYourArmy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then(setBotInfos);
  }, []);
  function handleBotSelect(e) {
    let id = e.target.parentElement.parentElement.id;

    botSpec.map((bot) => bot);
    if (id === "") return 0;
    if (botSpec.find((item) => item.id === parseInt(id))) return 0;
    else
      fetch(`http://localhost:8002/bots/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          setBotSpec([...botSpec, data]);
          return botSpec;
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
    // setDeleted(!deleted);
  }
    return (
    <div>
      <YourBotArmy
        bot={botSpec}
        botDelete={botDelete}
        yourArmy={yourArmy}
        setYourArmy={setYourArmy}
      />
      {/* Arrange the placing of the bots and click features and */}

      <BotCollection
        bot={botInfos}
        botDelete={botDelete}
        handleBotSelect={handleBotSelect}
        setYourArmy={setYourArmy}
      />
    </div>
  );
}

export default BotsPage;
