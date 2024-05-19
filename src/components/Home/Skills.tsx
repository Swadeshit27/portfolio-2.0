
import React from "react";
import SkillsIcons from "./SkillsIcons";
import Layout from "../common/Layout";


const Skills = (): JSX.Element => {
    return (
        <>
            <Layout title="skills">
                <div className="w-full grid sm:grid-cols-2 gap-x-20 gap-y-12">
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