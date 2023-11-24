import {useState, useEffect} from 'react';

import './snake.scss';


const Component = ({name, children}) => {

    return (
        <div class={name}>
            {children}
        </div>
    )
}

//decorator
const withCoordinates = (Component) => {


    return ({top, left, ...props}) => {
        return (
        <div style={{top: `${top}px`,left: `${left}px`, position: 'absolute'}}>
            <Component {...props}/>
        </div>
        )
    }
}

const withDirection = (Component) => {

    return ({dir, ...props}) => {
        return (
            <div className={`dir-${dir}`}>
                <Component />

            </div>
        )

    }
}
// const SnakeHead = ({dir= 'up', top = 0, left = 0}) => {    
   
//    const [_dir, setDir] = useState(dir);  
//    const [_top, setTop] = useState(top);
//    const [_left, setLeft] = useState(left);


//     return (
//         <div 
//         className= {`snake__head dir-${_dir}`} 
//         style = {{top: `${_top}px`, left: `${_left}px`}} >
            
//         </div>
//     )
// }

//pure composition
// const SnakeHead = ({top=0, left =0}) => {

//     return (
//         <div style= {{
//             top: `${top}px`,
//             left: `${left}px`,
//         }}>
//             <Component name = 'head' />

//         </div>

//     )
// }

// const SnakeTail = ({top=0, left =0}) => {

//     return (
//         <div style= {{
//             top: `${top}px`,
//             left: `${left}px`,
//         }}>
//             <Component name = 'tail' />

//         </div>

//     )
// }
 const SnakeHead = withCoordinates(withDirection(Component));
 const SnakeTail = withCoordinates(withDirection(Component));

 const Snake = () => {
   return ( 
    < Component name='snake'>
        <SnakeHead top={100} left= {200} name='tail' dir='up'/>
        <SnakeTail top={100} left= {200} name='tail' dir='down'/>
    </Component>
   )
 }

export {Snake};