import React, { FC } from "react";
import Layout from "../common/Layout";  
import AllExperiences from "./AllExperiencesCard";
import { getExperiences } from "@/app/libs/action";

type props = {
    isHeaderVisible?: boolean;
    category?: string;
    heading?: string;
    headingImg?: string; 
};

const Experience: FC<props> = async ({
    isHeaderVisible = true,
    category = "Internship",
    heading = "Work Experience",
    headingImg = "/job.png", 
}) => {
    const data: any = await getExperiences();
    const experiences: ExperienceProps[] = data?.documents.reverse();
    return (
        <>
            <Layout
                title={isHeaderVisible ? heading : ""}
                titleImg={isHeaderVisible ? headingImg : ""}
            >
                {experiences && experiences.length > 0 ? (
                    <AllExperiences experiences={experiences} category={category} />
                ) : (
                    <div>
                        <h1 className="text-center text-3xl font-bold">
                            No Experience Found
                        </h1>
                    </div>
                )}
            </Layout>
        </>
    );
};

export default Experience;
