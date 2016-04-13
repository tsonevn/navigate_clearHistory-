import { EventData } from "data/observable";
import { Page } from "ui/page";
import {topmost} from "ui/frame"


export function onTap(){
    topmost().navigate({
        moduleName:"page2", 
        clearHistory:false
    })
}