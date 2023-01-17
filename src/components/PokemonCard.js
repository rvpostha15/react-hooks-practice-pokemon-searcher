import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

  const [isFront, setIsFront]=useState(true)

  const {sprites, name, id, hp} = poke

  const toggleSprite = () => {
    setIsFront(!isFront)
  }

  return (
    <Card
      onClick={toggleSprite}
    >
      <div>
        <div className="image">
          <img 
            src = {isFront ? sprites.front: sprites.back}
            alt="oh no!" 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
