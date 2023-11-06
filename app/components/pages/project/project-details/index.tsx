import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDetails = () =>{
    return(
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 z-[-1]"
                style={{background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg) no-repeat center/cover'}}
            />
            <SectionTitle subtitle="Projects" title="Project Name" className="text-center items-center sm:[&>h3]:text-4xl"/>
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis sequi, minima dolorem eligendi eaque numquam maiores ex? Aut nostrum obcaecati id nulla quasi minima magni! Ducimus et fuga consequatur.</p>

            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github.com" target="_blank">
                    <Button className="min-w-[180px]"><TbBrandGithub size={20}/>Repository</Button>
                </a>

                <a href="https://github.com" target="_blank">
                    <Button className="min-w-[180px]"><FiGlobe size={20}/>Online Project</Button>
                </a>
            </div>
            <Link href='/Projects'>
                <HiArrowNarrowLeft size={20}/>
                Back to Projects
            </Link>
        </section>
    )
}