import conf from "./conf";
import { Client, Databases, Storage, } from "appwrite";

export class EducationService {
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

    async getAllEducation() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteEducationCollectionId,
            )
        } catch (error) {
            console.log("Education Service : : getAllEducation : : error : ", error);
            throw error;
        }
    }

    async getEducationById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEducationCollectionId,
                documentId,
            )
        } catch (error) {
            console.log("Education Service : : getEducationById : : error : ", error);
            throw error;
        }
    }
}

const educationService = new EducationService();
export default educationService