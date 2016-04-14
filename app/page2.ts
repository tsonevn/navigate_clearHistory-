import {topmost} from "ui/frame";

export function back(){
    //crash on return to the main page
    //topmost().transition = { name: "fade" };
    //topmost().transition = { name: "flip" };
    
    //works only twice 
    //topmost().transition = { name: "slideRight" };
    
    //works only twice 
    topmost().transition = { name: "slideBottom" }
    
    topmost().navigate({
        moduleName:"main-page", 
        clearHistory:true
    })
}