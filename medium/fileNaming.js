function fileNaming(names){
    let checkNames=[];
    let count = [];
    for (let i=0; i<names.length; i++) {
        let index = checkNames.indexOf(names[i]);
        if (index<0) {
            checkNames.push(names[i]);
            count.push(1);
        } else {
            let newName = names[i]+"("+count[index]+")";
            while (checkNames.indexOf(newName)>=0) {
                count[index] = count[index]+1;
                newName = names[i]+"("+count[index]+")";
            }
            names[i]=newName;
            checkNames.push(names[i]);
            count.push(1);
            
            
        }
    }
    return names;
}
