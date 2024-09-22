import conf from "./conf";
import { Client, Databases, Storage, } from "appwrite";

export class MyInfoService {
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

    async getAllInfo() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteMyInfoCollectionId,
            )
        } catch (error) {
            console.log("Info Service : : getAllInfo : : error : ", error);
            throw error;
        }
    }

    async getInfoById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMyInfoCollectionId,
                documentId,
            )
        } catch (error) {
            console.log("Info Service : : getInfoById : : error : ", error);
            throw error;
        }
    }
}

const myInfoService = new MyInfoService();
export default myInfoService