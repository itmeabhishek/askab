import React from 'react';
function Hello(){
    const sayHello=()=>{
        console.log(`hello!`);
    }
    return(
        <div>
            <h3>This is a component module</h3>
            <button onClick={sayHello}>Click Here</button>
        </div>
    );
}
export default Hello;