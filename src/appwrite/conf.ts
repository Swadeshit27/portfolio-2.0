const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwriteMyInfoCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MYINFO_ID),
    appwriteEducationCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EDUCATION_ID),
    appwriteProjectsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS_ID),
    appwriteSkillsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SKILLS_ID),
    appwriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUKET_ID),
    appwriteAchievementId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ACHIVEMENTS_ID),
    appwriteExperienceId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EXPERIENCE_ID),
}

export default conf;