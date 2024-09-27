"use server"

import achievementService from "@/appwrite/achievements";
import educationService from "@/appwrite/education";
import experienceService from "@/appwrite/experience";
import myInfoService from "@/appwrite/myinfo";
import projectService from "@/appwrite/projects";
import skillsService from "@/appwrite/skills";
import { unstable_cache } from "next/cache";

export const getMyInfo = unstable_cache(async () => {
    const res = await myInfoService.getAllInfo();
    return res;
},
    ["my-info"],
    {
        revalidate: 5 * 60,
        tags: ["my-info"]
    }
)

export const getEducationDetails = unstable_cache(async () => {
    const res = await educationService.getAllEducation();
    return res;
},
    ["education"],
    {
        revalidate: 3600,
        tags: ['education']
    }
)

export const getAchievements = unstable_cache(async () => {
    const res = await achievementService.getAllAchievements()
    return res;
},
    ["achievements"],
    {
        revalidate: 3600,
        tags: ['achievements']
    }
)

export const getExperiences = unstable_cache(async () => {
    const res = await experienceService.getAllExperience();
    return res;
},
    ["experiences"],
    {
        revalidate: 3600,
        tags: ['experiences']
    }
)


export const getProjects = unstable_cache(async () => {
    const res = await projectService.getAllProject();
    return res;
},
    ["projects"],
    {
        revalidate: 5 * 60,
        tags: ['projects']
    }
)

export const getSkills = unstable_cache(async () => {
    const res = await skillsService.getAllSkills();
    return res;
},
    ["skills"],
    {
        revalidate: 5 * 60,
        tags: ['skills']
    }
)

