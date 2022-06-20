import { Component } from "react";

class Toggle extends Component{

   shoot(a,b){
    alert(b.type)
   }

   render(){
    return(
        <div>
            <button type="button" onClick={(e)=>this.shoot("Goal",e)}>
                clickme
            </button>
        </div>
    )
   }

}

export default Toggle;