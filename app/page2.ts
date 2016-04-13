import {topmost} from "ui/frame";

export function back(){
    topmost().navigate({
        moduleName:"main-page", 
        clearHistory:true
    })
}