const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabseid: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),
    appwriteCollectionin: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf