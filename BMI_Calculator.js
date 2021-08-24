// 3 คะแนน ให้ใช้ let , const เขียนเป็น function ทำข้อมูลทดสอบ
// อย่างน้อย 3 เคส


function findBMI(weight,height){
    let BMI = weight/(height**2);

    if(BMI < 18.5){
        return `Your BMI is : ${BMI}, Under Weight`;
    }else if(18.5 <= BMI && BMI < 22.9){
        return `Your BMI is : ${BMI}, Normal`;
    }else
    return `Your BMI is : ${BMI}, Over Weight`;
}

console.log(findBMI(16.55612,0.9906))//Georgia's
console.log(findBMI(72.5,1.82));
console.log(findBMI(100,1.5));
