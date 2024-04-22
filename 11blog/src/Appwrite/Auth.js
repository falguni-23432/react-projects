import Conf from "../Conf/Conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    Account;


    constructor() {
        console.log("AppWrite URL:", Conf.appWriteUrl); // Logging the URL for debugging
        this.Client
            .setEndpoint(Conf.appwriteUrl)
            .setProject(Conf.appwriteProjectId);
        this.account = new Account(this.Client);
       

    }

    async createAccount({email,password,name}){
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name);

           if (userAccount) {

            //called another method
            return this.login({email,password});
           }
           else{
            return userAccount;
           }

        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

     async getCurrentUser(){
        try {
            return await this.Client.get();
        } catch (error) {
            console.log("AppWrite service :: getCurrentUser :: error", error);
        }
        return null;
     }
    
    async logout(){
        try {
            await this.account.deleteSessions();    
        } catch (error) {
            console.log("Appwrite serive ::logout ::error ",error);
        }
    }
}

const authService = new AuthService();
export default authService;