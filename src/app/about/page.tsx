"use client"
// import { Metadata } from "next";
import MyInfo from "@/components/About/MyInfo";
import AcademicDetails from "@/components/About/AcademicDetails";
import Layout from "@/components/common/Layout";

// export const metadata: Metadata = {
//     title: "About "
// }


const AboutPage = () => {
    return (
        <>
            <Layout title="about me">
                <MyInfo />
                <AcademicDetails />
            </Layout>
        </>
    );
};

export default AboutPage;
