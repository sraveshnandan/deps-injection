export class UploadService {
    constructor(private uploader:string ){}
    async upload(file: any): Promise<any> {
        // Implement file upload logic here
        return Promise.resolve({ filename: file.originalname, status: "uploaded" });
    }
}