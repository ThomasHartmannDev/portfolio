import { HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"

export const PageIntroduction = () => {
    return(
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle 
                subtitle='Projetcs' 
                title='My Projects' 
                className="text-center itens-center [&>h3]: text-4xl"/>

            <div className="flex flex-col items-center justify-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Here you will have projects that I developed, browse freely to explore the projects and see how they were created, look at the code, technologies used and features implemented.
                </p>
                <Link href='/'>
                    <HiArrowNarrowLeft size={20}/>
                    Back to Home
                </Link>
            </div>
        </section>
    )
}