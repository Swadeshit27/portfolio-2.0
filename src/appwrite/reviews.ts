import conf from "./conf";
import { Client, Databases, ID, Storage, } from "appwrite";

export class ReviewService {
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

    async getAllReviews() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteReviewId,
            )
        } catch (error) {
            console.log("error : ", error);
            throw error;
        }
    }

    async getReviewById(documentId: string) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteReviewId,
                documentId,
            )
        } catch (error) {
            console.log("Project Service : : getProjectById : : error : ", error);
            throw error;
        }
    }

    async createReview(data: IReviews) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteReviewId,
                ID.unique(),
                data
            )
        } catch (error) {
            console.log("error : ", error);
            throw error;
        }
    }

    async updateReview(documentId: string, data: ReviewProps) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteReviewId,
                documentId,
                data
            )
        } catch (error) {
            console.log("error : ", error);
            throw error;
        }
    }

    async deleteReview(documentId: string) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteReviewId,
                documentId,
            )
            return true;
        } catch (error) {
            console.log("error : ", error);
            return false;
        }
    }
}

const reviewService = new ReviewService();
export default reviewService