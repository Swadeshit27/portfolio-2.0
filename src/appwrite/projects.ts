import conf from "./conf";
import { Client, Databases, Storage, } from "appwrite";

export class ProjectService {
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

    async getAllProject() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,
            )
        } catch (error) {
            console.log("Project Service : : getAllProject : : error : ", error);
            throw error;
        }
    }

    async getProjectById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,
                documentId,
            )
        } catch (error) {
            console.log("Project Service : : getProjectById : : error : ", error);
            throw error;
        }
    }
}

const projectService = new ProjectService();
export default projectService