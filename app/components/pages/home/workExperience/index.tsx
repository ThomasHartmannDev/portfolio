import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experienceItem"

export const WorkExperience = () =>{
    return(
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="Experiências" title="Experiência Proficional"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt ex, ipsam magni repudiandae cupiditate?</p>
            </div>
            <div className="flex flex-col gap-4">
                <ExperienceItem/>
                <ExperienceItem/>
            </div>
        </section>
    )
}