
import type { Request, Response } from "express";
import { AuthService } from "./health.service";

export const healthController ={
    getHealth: async (req:Request, res:Response)=>{
        const authService = new AuthService(true);
        const healthInfo = authService.getHealth();
        res.status(200).json(healthInfo);
    }
}