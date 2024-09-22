
import React from "react";
import SkillsIcons from "./SkillsIcons";
import Layout from "../common/Layout";
import skillsService from "@/appwrite/skills";
export const revalidate = process.env.NEXT_PUBLIC_REVALIDATE_TIME;

const SkillsCategory = [
    {
        title: "front-end tools",
        category: "Frontend",
    },
    {
        title: "Back-end Tools",
        category: "Backend",
    },
    {
        title: "Language",
        category: "Language",
    },
    {
        title: "React Native App",
        category: "ReactNative",
    },
    {
        title: "Tools",
        category: "Tools",
    },
    {
        title: "Soft Skills",
        category: "SoftSkills",
    },
    {
        title: "Others",
        category: "Others",
    }, 
]


const Skills = async () => {
    const data: any = await skillsService.getAllSkills();
    const skills: SkillProps[] = data?.documents; 
    return (
        <>
            <Layout title="skills" titleImg="/skills.png">
                <div className="w-full grid sm:grid-cols-2 gap-x-20 gap-y-12">
                    {SkillsCategory.map((item, i) => (
                        <SkillsIcons
                            key={i}
                            heading={item.title}
                            category={item.category}
                            skills={skills}
                        />
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default Skills;