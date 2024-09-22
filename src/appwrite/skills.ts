import conf from "./conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class SkillsService {
    client = new Client();
    databases: Databases;
    bucket: Storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getAllSkills() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteSkillsCollectionId,
                [Query.limit(100)]
            );
        } catch (error) {
            console.log("Skills Service : : getAllSkills : : error : ", error);
            throw error;
        }
    }

    async getSkillsById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteSkillsCollectionId,
                documentId
            );
        } catch (error) {
            console.log("Skills Service : : getSkillsById : : error : ", error);
            throw error;
        }
    }
}

const skillsService = new SkillsService();
export default skillsService;
