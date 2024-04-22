import Conf from "../Conf/Conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";



export class Service {
    Client = new Client();
    Databases;
    Bucket;


    constructor() {
        this.Client
            .setEndpoint(Conf.appwriteUrl)
            .setEndpoint(Conf.appwriteProjectId);
        this.Databases = new Databases(this.Client);
        this.Bucket = new Storage(this.Client);
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.Databases.createDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("AppWrite Service :: createPost ::error ", error);
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.Databases.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("AppWrite Service :: updatePost ::error ", error);
        }
    }
    async deletepost(slug){
        try {
            await this.Databases.deleteDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("AppWrite Service :: deletepost ::error ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            await this.Databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
                
            )
            return true;
        } catch (error) {
            console.log("appWrite Service :: getPost ::error ", error);
            return false;
        }
    }


    async getPosts(queries =[Query.equal("status","Active")]){
       try {
          return await this.Databases.listDocuments(
            Conf.appwriteDatabaseId,
            Conf.appwriteCollectionId,
            queries,
            
          )
       } catch (error) {
        console.log("appWrite Service :: getPosts ::error ", error);
        return false;
       }
    }

    // file upload method


    async uploadFile(file){
        try {
            return await this.Bucket.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appWrite Service :: uploadFile ::error ", error);
            return false;
        }
    }
    async deleteFile(fileId){
         try {
            await this.Bucket.deleteFile(
                Conf.appwriteBucketId,
                fileId
            )
            return true;
         } catch (error) {
            console.log("appWrite Service :: deleteFile ::error ", error);
            return false;
         }
    }
    getFilePreview(fileId){
        return this.Bucket.getFilePreview(Conf.appwriteBucketId,fileId)
    }
    
}

const service = new Service()
export default service