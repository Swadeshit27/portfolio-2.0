import conf from "./conf";
import { Client, Databases, Storage, } from "appwrite";

export class ExperienceService {
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

    async getAllExperience() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteExperienceId,
            )
        } catch (error) {
            console.log("Education Service : : getAllEducation : : error : ", error);
            throw error;
        }
    }

    async getExperienceById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteExperienceId,
                documentId,
            )
        } catch (error) {
            console.log("Education Service : : getEducationById : : error : ", error);
            throw error;
        }
    }
}

const experienceService = new ExperienceService();
export default experienceService