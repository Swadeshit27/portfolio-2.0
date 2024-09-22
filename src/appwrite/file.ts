
import conf from "./conf";
import { Client, Databases, Storage, } from "appwrite";

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
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const fileService = new FileService();
export default fileService