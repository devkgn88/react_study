const PI = 3.141892; 
function getArea(radius){
    return PI * radius * radius;
}

function getRound(radius){
    return 2*PI*radius;
}

export default{
    PI, 
    getArea, 
    getRound
};