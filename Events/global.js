import { ROOT } from "../Helper/constants.js";
import { globalState } from "../index.js";
function GlobalEvent(){
    ROOT.addEventListener("click", function(event){
        if(event.target.localName==="img"){
            const clickId = event.target.parentNode.id;
            const flatArray=globalState.flat();
            const square=flatArray.find((el)=>el.id==clickId);
            console.log(square);
            
        }
    })
}
export {GlobalEvent};