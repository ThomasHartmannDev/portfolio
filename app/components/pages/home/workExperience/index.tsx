import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experienceItem"
import { WorkExperience as IWorkExperience} from "@/app/types/work-experience"

type WorkExperienceProps = {
    experiences: IWorkExperience[]
}

export const WorkExperience = ({experiences}:WorkExperienceProps) =>{
    return(
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="Experiences" title="Professional experience"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt ex, ipsam magni repudiandae cupiditate?</p>
            </div>
            <div className="flex flex-col gap-4">
                {
                    experiences?.map((experience)=>(
                        <ExperienceItem key={experience.companyName} experience={experience}/>
                    ))
                }
                
            </div>
        </section>
    )
}