
import type { Request, Response } from "express";
interface UploadService {
    upload(file:any):Promise<any>;
}
export class UploadController{
    constructor(private uploadservice:UploadService){}

    uploadFile= async(req:Request, res:Response)=>{
        try {
            const result = await this.uploadservice.upload(req);
            res.status(200).json({message:"File uploaded successfully", data:result});
        } catch (error) {
            res.status(500).json({message:"File upload failed", error});
        }
    }

}