
import { Metadata } from "next";
import MyInfo from "@/components/About/MyInfo";
import AcademicDetails from "@/components/About/AcademicDetails";
import Layout from "@/components/common/Layout";

export const metadata: Metadata = {
    title: "About ",
    openGraph: {
        title: "About",
        description: "Hello 👋, I am Swadesh pal, from Bishnupur, west Bengal, Student of Jalpaiguri Government Engineering College in Information Technology Department. I'm a Full Stack Web Developer and React Native Developer from India.",
        images: [{
            url: '/og.jpg',
            width: 1200,
            height: 630,
            alt: "About - Swadesh Pal",
        }],
        url: "/about",
        type: "website",
    }
}


const AboutPage = () => {
    return (
        <>
            <Layout>
                <MyInfo />
                <AcademicDetails />
            </Layout>
        </> 
    );
};

export default AboutPage;
