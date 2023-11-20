import {useState, useEffect} from 'react';

import './snake.scss';


const Component = ({name}) => {

    return (
        <div class={name}></div>
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
 const SnakeHead = withCoordinates(Component);
 const SnakeTail = withCoordinates(Component);

export {SnakeHead, SnakeTail};