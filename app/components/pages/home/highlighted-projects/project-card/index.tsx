import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () =>{
    return(
        <div className="flex gap-6 lg:gap-13 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                width={420} 
                height={304} 
                src='https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg'
                alt='Thumbnail'
                className="w-full h-[200px] sm:h-[300px] lg:min-h-default object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        className=""
                        width={20} 
                        height={20}
                        alt=""
                        src='/images/icons/project-title-icon.svg'
                    /> 
                    Title
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis officia harum accusamus dignissimos repellat quibusdam repellendus fugit, iure fuga incidunt omnis rem magni voluptates tempore saepe at. Est, commodi?
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-[350px]">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                </div>
                <Link href='/projects/project'>
                    See Project
                    <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}