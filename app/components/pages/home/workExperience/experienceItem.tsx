import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () =>{
    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                        src="https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg" 
                        width={40} 
                        height={40} 
                        alt='Nome Empresa'
                        className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"/>
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="https://linkedin.com/" target="_blank" className="text-gray-500 hover: text-purple-500 transition-colors">Link Empresa</a>
                    <h4 className="text-gray-300">Cargo na empresa</h4>
                    <span className="text-gray-500">Tempo trabalhado na empresa</span>
                    <p className="text-gray-400">Desc do trabalho</p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>

                </div>
            </div>
        </div>
    )
}