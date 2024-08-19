export interface AUTHIA {
    profile: {
      data:{
        login:boolean,
        loading?:boolean,
        unauthorized?:boolean,
        img?:string,
        name?:string,
        email?:string,
      }
    }
  }

