import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite"

export class Service {
    client = new Client()
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectid);
        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabseid,
                tableId: conf.appwriteCollectionin,
                rowId: slug,
                data: { title, slug, content, featuredImage, status, userID }
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePOst(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabseid,
                tableId: conf.appwriteCollectionin,
                rowId: slug,
                data: { title, content, featuredImage, status }
            })
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    async deletePost(slug, { title, content, featuredImage, status }) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabseid,
                tableId: conf.appwriteCollectionin,
                rowId: slug
            })
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabseid,
                tableId: conf.appwriteCollectionin,
                rowId: slug
            })
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabseid,
                tableId: conf.appwriteCollectionin,
                queries
            })
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketid,
                idUnique: ID.unique,
                file: file
            })
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketid,
                file: file
            })
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getfilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketid,
            file: file
        })
    } // no async as the response is very fast
}
const service = new Service()
export default service;