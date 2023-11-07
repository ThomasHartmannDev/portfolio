import { SectionTitle } from "@/app/components/section-title"
import { TbBrandNextjs } from "react-icons/tb"
import { KnownTech } from "./known-tech"
import { array } from "zod"
import { HorizontalDivider } from "@/app/components/divider/horizontal"

export const KnownTechs = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="Skills" title="Knowledges" />
            <HorizontalDivider className="mb-16"/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({length:8}).map((_,index)=>(
                    <KnownTech key={index} tech={{
                        icon: <TbBrandNextjs/>,
                        name: 'Next.JS',
                        StartDate: '2021-01-01'
                    }}/>
                ))}
            </div>

        </section>
    )
}