function findZodiac(years){

    

    switch(years % 12){
        case 0 : return "monkey";
        case 1 : return "rooster";
        case 2 : return "dog";
        case 3 : return "pig";
        case 4 : return "rat";
        case 5 : return "ox";
        case 6 : return "tiger";
        case 7 : return "rabbit";
        case 8 : return "dragon";
        case 9 : return "snake";
        case 10 : return "horse";
        case 11 : return "sheep";
    }
}

console.log(findZodiac(2002));
