import conf from "./conf";
import { Client, Databases, Storage } from "appwrite";

export class AchievementService {
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

    async getAllAchievements() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteAchievementId
            );
        } catch (error) {
            console.log("Education Service : : getAllEducation : : error : ", error);
            throw error;
        }
    }

    async getAchievementById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteAchievementId,
                documentId
            );
        } catch (error) {
            console.log("Education Service : : getEducationById : : error : ", error);
            throw error;
        }
    }
}

const achievementService = new AchievementService();
export default achievementService;
