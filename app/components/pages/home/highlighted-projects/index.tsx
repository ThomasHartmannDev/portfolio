import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () =>{
    return(
        <section className="container py-16">
            <SectionTitle title={'Featured projects'} subtitle={'Highlights'}/>
            <HorizontalDivider className="mb-16"/>

            <div>
                <ProjectCard/>
                <HorizontalDivider className="my-16"/>
                <ProjectCard/>
                <HorizontalDivider className="my-16"/>
                <ProjectCard/>
                <HorizontalDivider className="my-16"/>

                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Are you interested?</span>
                    <Link className='inline-flex' href='/projects'>
                        See all Projects
                        <HiArrowNarrowRight/>
                    </Link>
                </p>
            </div>
        </section>
    )
}