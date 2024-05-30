const todoDataValidation=({todoText})=>{
    return new Promise((resolve,reject)=>{
        console.log("GETTING TODO",todoText);
        if(!todoText) reject("TODO is missing");
        if(typeof todoText !=="string") reject("TODO is not a text");
        if(todoText.length<3 || todoText.length>100) reject("TODO length should be 3-100");
        resolve();

    })
}
module.exports={todoDataValidation}