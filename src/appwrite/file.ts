
import toast from "react-hot-toast";
import conf from "./conf";
import { Client, Databases, ID, Storage, } from "appwrite";

export class FileService {
    client = new Client()
    databases: Databases;
    bucket: Storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    getFilePreview(fileId: string) {
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

    async uploadFile(file: any) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error: any) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            toast.error(error.message)
            return false
        }
    }

}

const fileService = new FileService();
export default fileService