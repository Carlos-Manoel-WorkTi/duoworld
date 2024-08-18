export interface ResponseDTOS {
    status:boolean,
    message:string,
    user: {
        name: string;
        email: string;
        image: string;
      }[],
    path:string,
    cod:number,
    timestamp:string
  }

