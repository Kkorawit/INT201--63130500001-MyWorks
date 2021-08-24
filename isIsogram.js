function isIsogram(str){
    let isIso = true;
    let map1 = new Map();
    arr = String(str).toLowerCase().split("");
    arr.forEach(char => {
        console.log(char)
        if(map1.has(char)){
            console.log(map1.get(char));
            let temp = map1.get(char);
            map1.set(char , parseInt(temp)+1);
            console.log(map1);
            isIso = false;
        }else{
            map1.set(char , 1);
            console.log(map1);
        }
    })

    return isIso;

}
isIsogram("isIsogram");