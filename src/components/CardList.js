import React from 'react';
import Card from './Card';

const CardList = ({people}) =>{
  if(false){
    throw new Error('NOOO')
  }
  return(
    <div>
      {
        people.map(person => {
          return(
            <Card
            key= {person.id}
            name= {person.name}
            by= {person.birth_year} 
            gender= {person.gender} 
            height= {person.height} 
            home= {person.homeworld} 
            specie= {person.specie}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;