import Image from "next/image"

const sections = [
    {
        title: 'Login',
        image: 'https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg'
    },
    {
        title: 'Screen',
        image: 'https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg'
    }
]

export const ProjectSections = () =>{
    return(
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {sections.map(section => (
                <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        {section.title}
                    </h2>
                    <Image alt = {`Image: ${section.title}`} src={section.image} width={1080} height={672} className="w-full aspect-auto rounded-lg object-cover" unoptimized/>
                </div>
                
            ))}
        </section>
    )
}