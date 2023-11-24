import { useState, useEffect } from 'react';

import './snake.scss';


const Component = ({ name, children }) => {

    return (
        <div className={name}>
            {children}
        </div>
    )
}

//decorator
const withCoordinates = (Component) => {


    return ({ coord: { top, left }, ...props }) => {
        return (
            <div style={{ top: `${top}px`, left: `${left}px`, position: 'absolute' }}>
                <Component {...props} />
            </div>
        )
    }
}

const withDirection = (Component) => {

    return ({ dir, ...props }) => {
        return (
            <div className={`dir-${dir}`}>
                <Component {...props} />

            </div>
        )

    }
}

const SnakeHead = withCoordinates(withDirection(Component));
const SnakeTail = withCoordinates(withDirection(Component));
const SnakeBody = withCoordinates(withDirection(Component));

const Snake = ({ data: { children } }) => {
    return (
        < Component name='snake'>
            {//  <SnakeHead top={100} left={200} name='head' dir='up' />
                // <SnakeTail top={150} left={200} name='tail' dir='down' />
            }
            {
                children.map((childData, idx) => {
                    return (childData.name === "head" && <SnakeHead key={`k-${idx}`} {...childData} /> ||
                        childData.name === "tail" && <SnakeTail key={`k-${idx}`} {...childData} /> ||
                        childData.name === "body" && <SnakeBody key={`K-${idx}`} {...childData} />)
                })
            }
        </Component>
    )
}

export { Snake };