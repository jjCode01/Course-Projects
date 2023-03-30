import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <React.Fragment>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })            
            }
        </React.Fragment>     
    );
}

export default CardList;