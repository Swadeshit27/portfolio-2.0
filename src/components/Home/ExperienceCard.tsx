import { SlideTopLeftAnimation } from "@/utils/AnimationDiv";
import { Calendar, MapPin } from "lucide-react"; 
import { FC } from "react"; 
import Button from "../common/button";

const ExperienceCard: FC<ExperienceProps> = ({
    $id,
    title,
    duration,
    description,
    place,
    certificate,
    offerLetter,
    lor,
    optional,
    category,
    techTools,
    position,
}) => {
    return (
        <div className="w-full flex gap-x-2 py-4 sm:py-8">
            <div className='mt-4 min-w-[2rem] w-8 h-8 border-2 border-rose-500 relative after:absolute after:contents-[""] after:h-4 after:w-4 after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:bg-rose-500 bg-[#1C2434] rounded-full max-sm:mt-1 me-2'></div>
            <SlideTopLeftAnimation className="w-full font-libre p-3 sm:p-6 bg-violet-800 rounded-md relative">
                <div
                    className={`absolute top-3 sm:top-[25px] border-solid border-y-transparent border-y-8 left-[-8px]  border-r-violet-800 border-r-8  border-l-0}`}
                ></div>
                <h1 className="xs:text-lg md:text-xl font-semibold  tracking-wider text-yellow-500 mb-2 ">
                    {title}
                </h1>
                <h1 className="text-sm sm:text-sm mb-1 capitalize ">{position}</h1>
                <div className="flex items-center gap-8 text-sm mb-4">
                    <div className="flex items-center ">
                        <Calendar size={15} />
                        <h1 className="ms-1.5 opacity-80">{duration}</h1>
                    </div>
                    <div className="flex items-center">
                        <MapPin size={15} />
                        <h1 className="ms-1.5  opacity-80">{place}</h1>
                    </div>
                </div>
                <div className="opacity-75 text-sm   max-xs:text-xs ">
                    {description}
                </div>
                {techTools &&
                    <div className="text-sm mt-3 text-white">
                        <span className="">Working Tools: </span>
                        <span className="">{techTools}</span>
                    </div>
                }
                <div className="space-x-8 mt-3">
                    {offerLetter && (
                        <Button
                            text="Offer Letter"
                            isLink={true}
                            size="sm"
                            link={offerLetter}
                            className="!bg-green-600 px-3 py-1.5 text-xs"
                        />
                    )}
                    {lor && (
                        <Button
                            text="LOR"
                            isLink={true}
                            size="sm"
                            link={lor}
                            className="!bg-green-600 px-3 py-1.5 text-xs"
                        />
                    )}
                    {certificate && (
                        <Button
                            text="Certificate"
                            isLink={true}
                            size="sm"
                            link={certificate}
                            className="!bg-green-600 px-3 py-1.5 text-xs"
                        />
                    )}
                </div>
            </SlideTopLeftAnimation>
        </div>
    );
};

export default ExperienceCard;
