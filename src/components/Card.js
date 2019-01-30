import React from 'react'; //import react's library  
import './Card.css'; //import the style sheet of the element created.


const Card = ({id, name, by, gender, height, home, specie}) => {

  return (
    <div class="db center mw5 tc black link dim dib pa3 ma2 grow bw2 shadow-5">

        <img class="db ba b--black-10"
          alt={name}
          src={`https://robohash.org/${name}?size=200x200`}/>
          
        <dl class="mt2 f6 lh-copy">

          <dt class="clip">Name</dt>
          <dd class="ml0 b">{name}</dd>

          <dt class="clip">Birth year</dt>
          <dd class="ml0 gray">Birth year: {by}</dd>

          <dt class="clip">Gender</dt>
          <dd class="ml0 gray">Gender: {gender}</dd>

          <dt class="clip">Height</dt>
          <dd class="ml0 gray">Height: {height} cm</dd>

          <dt class="clip">Homeworld</dt>
          <dd class="ml0 gray">Homeworld: {home}</dd>

          <dt class="clip">Specie</dt>
          <dd class="ml0 gray">Specie: {specie}</dd>
        </dl>
    </div>
  )
}

export default Card;

