import Image from "next/image";
import React from "react";
import Photo2 from "@/assets/photo2.png"; 
import fileService from "@/appwrite/file";
import TypewriteEffect from "./TypewriteEffect";
import Button from "../common/button";
import { SlideUpAnimation } from "@/utils/AnimationDiv";
import SocialIcons from "./SocialIcons"; 
import { getMyInfo } from "@/app/libs/action";

const HomePage = async () => {
    const data: any = await getMyInfo();
    const myInfo: infoProps = data.documents[0]; 

    return (
        <>
            <div className="h-auto layout py-10 xs:py-16 sm:py-24 flex max-md:flex-col justify-between items-center">
                <SlideUpAnimation className="md:w-[50%] max-md:h-auto h-full flex flex-col justify-center  items-center max-md:order-2  max-md:mt-12 ">
                    <p className="text-center font-medium text-sm md:text-2xl text-yellow-500">
                        Hello I&apos;m ✋
                    </p>
                    <h1 className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl font-semibold capitalize my-2 sm:my-4 text-violet-600">
                        {myInfo?.name || "Swadesh Pal"}
                    </h1>
                    <TypewriteEffect words={myInfo?.homeSubtitles?.split(",")} />
                    <div className="flex gap-x-8 my-6">
                        <Button
                            text="Resume"
                            isLink={true}
                            size="lg"
                            className="max-xxs:px-6 max-xxs:py-2 max-xxs:text-sm"
                            link={myInfo?.resume ||
                                "https://cloud.appwrite.io/v1/storage/buckets/66241b72624e71cbcd6a/files/66435eeb002084a85efa/view?project=662415d3bdf8f8d8078b&mode=admin"
                            }
                        />
                        <Button
                            text="Hire Me"
                            path="/contact"
                            variant="outline"
                            size="lg"
                            isNavigate={true}
                            className="!border-violet-400 !text-violet-400 max-xxs:px-6 max-xxs:py-2 max-xxs:text-sm"  
                        />
                    </div>
                </SlideUpAnimation>
                <SlideUpAnimation className="w-[70%] md:w-[50%] h-full flex flex-col  justify-center items-center max-md:order-1 ">
                    <div className="border-custom w-60 h-60 xxs:w-[300px] sm:w-[350px] xxs:h-[300px]  sm:h-[350px] overflow-hidden">
                        <Image
                            src={
                                myInfo
                                    ? String(fileService.getFilePreview(myInfo.homeImg as string))
                                    : Photo2
                            }
                            alt="photo"
                            width={400}
                            height={300}
                            className="w-[25rem]   rounded-lg object-contain translate-y-4"
                        />
                    </div>
                </SlideUpAnimation>
            </div>
            <SocialIcons {...myInfo} />
        </>
    );
};

export default HomePage;
