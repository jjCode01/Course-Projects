import React from 'react';

const Scroll = (props) => {
    return (
        <div 
            style={{ 
                overflowY: 'scroll', 
                height: '75vh',
                boxSizing: 'border-box' }}>
            {props.children}
        </div>
    )
};

export default Scroll;