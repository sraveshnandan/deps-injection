import os from "os";
class AuthService {
    private status=false;
    constructor(client:Boolean){
        client ? this.status = true :false 
    }
    getHealth = ()=>{
        return {
            uptime:os.uptime(),
            name:os.hostname()
        }
    }
}

export  { AuthService}