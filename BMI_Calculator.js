

//Find by pound and Inch.
function findBMI(weight,height){
    const w = 0.453592; //กำหนดตัวแปร w ขึ้นมาเป็นค่าคงที่ 1 ปอนด์ / kg
    const m = 0.0254; //กำหนดตัวแปร m ขึ้นมาเป็นค่าคงที่ 1 Inch / Meter
    weight = weight*w; //แปลงค่า pound เป็น Inch
    height = height*m; //แปลงค่า Inch. เป็น Meter
    
    let BMI = weight/(height**2); //สูตรคำนวณ BMI = น้ำหนัก / ส่วนสูง * ส่วนสูง

    if(BMI < 18.5){ 
        return `Your BMI is : ${BMI}, Under Weight`;
    }else if(18.5 <= BMI && BMI < 22.9){
        return `Your BMI is : ${BMI}, Normal`;
    }else
    return `Your BMI is : ${BMI}, Over Weight`;
}// ทำเงื่อนไข 3 แบบ ให้กับ BMI แบ่งเป็นช่วงคือ น้อยกว่า 18.5 , 18.5 - 22.9 , มากกว่า 22.9

console.log(findBMI(36.5,39));//Georgia's
console.log(findBMI(115.1,60));//Example 1
console.log(findBMI(180,70));//Example 2
