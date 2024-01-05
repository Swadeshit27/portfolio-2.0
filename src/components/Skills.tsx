"use client";
import Header from "@/components/Header";
import React from "react";
import SkillsIcons from "./SkillsIcons";
import Layout from "./Layout";


const Skills = (): JSX.Element => {
    return (
        <>
            <Layout>
                <Header title="skills" />
                <div className="w-full flex flex-wrap max-md:flex-col justify-evenly">
                    <SkillsIcons heading="front-end tools" category="front-end" />
                    <SkillsIcons heading="tools" category="tools" />
                    <SkillsIcons heading="back-end tools" category="back-end" />
                    <SkillsIcons heading="languages" category="languages" />
                </div>
            </Layout>
        </>
    );
};

export default Skills;