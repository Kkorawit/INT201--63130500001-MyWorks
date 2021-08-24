

//Find by pound and Inch.
function findBMI(weight,height){
    const w = 0.453592;
    const m = 0.0254;
    weight = weight*w;
    height = height*m;
    
    let BMI = weight/(height**2);

    if(BMI < 18.5){
        return `Your BMI is : ${BMI}, Under Weight`;
    }else if(18.5 <= BMI && BMI < 22.9){
        return `Your BMI is : ${BMI}, Normal`;
    }else
    return `Your BMI is : ${BMI}, Over Weight`;
}

console.log(findBMI(36.5,39))//Georgia's
console.log(findBMI(115.1,60));
console.log(findBMI(180,70));
