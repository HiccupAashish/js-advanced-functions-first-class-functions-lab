const returnFirstTwoDrivers = function( drivers){
    return (drivers.slice(0,2))
    }
const returnLastTwoDrivers= function(drivers){
    return(drivers.slice(-2));
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const fareDoubler=(b)=>{return b*2};
const createFareMultiplier = (a)=> function multiplier(){ return a*a;}  
const fareTripler=(c)=>{return c*3};
const selectDifferentDrivers=(arrayOfDrivers, function)=> { function() ;}