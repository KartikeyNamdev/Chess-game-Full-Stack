import { ROOT } from "../Helper/constants.js";
function GlobalEvent(){
    ROOT.addEventListener("click", function(event){
        console.log(event);
    })
}
export {GlobalEvent};