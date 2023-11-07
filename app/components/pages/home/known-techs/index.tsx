import { SectionTitle } from "@/app/components/section-title"
import { TbBrandNextjs } from "react-icons/tb"
import { KnownTech } from "./known-tech"
import { array } from "zod"
import { HorizontalDivider } from "@/app/components/divider/horizontal"

import { KnownTech as IKnownTech } from "@/app/types/projects"

type knownTechsProps = {
    techs : IKnownTech[]
}

export const KnownTechs = ({techs} : knownTechsProps) => {
        
    return(

        <section className="container py-16">
            <SectionTitle subtitle="Skills" title="Knowledges" />
            <HorizontalDivider className="mb-16"/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech)=>(
                
                    <KnownTech key={tech.name} tech={tech}/>
                ))}
            </div>

        </section>
    )
}