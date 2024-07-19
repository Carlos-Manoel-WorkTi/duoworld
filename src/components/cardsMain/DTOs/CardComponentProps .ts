
export default interface CardComponentProps {
    data:{ 
    title:{
        titleSec:string,
        titleCurrent:string,
        link:string
    }
    p1: {
       text:string,
       value:string
     };
     p2: {
       text:string,
       value:string
     };
     p3: {
       text:string,
       value:string
     },
     style:{
        startColor:string,
        endColor:string
        btnBG:string;
     },
     tags:string[];
    }
   }