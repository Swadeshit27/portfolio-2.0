import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const SocialIconsList = [
    {
        icon: <FaGithub size={30} color="#fff" />,
        // path: "https://github.com/Swadeshit27",
        color: "#fff",
        name: "github"
    },
    {
        icon: <FaLinkedin size={30} color="#0A66C2" />,
        // path: "https://www.linkedin.com/in/swadesh-pal/",
        color: "#0A66C2",
        name: "linkedin"
    },
    {
        icon: <FaFacebook size={30} color="#0866FF" />,
        path: "https://www.facebook.com/profile.php?id=100073559185519",
        color: "#0866FF",
        name: "facebook"
    },
    {
        icon: <FaInstagram size={30} color="#FF3B36" />,
        path: "https://www.instagram.com/_swadesh_pal/",
        color: "#FF3B36",
        name: "instagram"
    },
    {
        icon: <FaXTwitter size={30} color="#d4d4d4" />,
        path: "https://twitter.com/Swadesh_27",
        color: "#d4d4d4",
        name: "twitter"
    },
]