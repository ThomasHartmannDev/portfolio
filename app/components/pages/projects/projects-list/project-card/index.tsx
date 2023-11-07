import Image from "next/image"

export const ProjectCard = () =>{
    return(
        <div className="rounded-lg h-[436] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-purple-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
            <Image 
                width={380} 
                height={200} 
                src='https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg'
                alt = 'Project Thumbnail'
                unoptimized
                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
            />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-purple-500 transition-all">Project Name</strong>
                <p className="mt-2 text-gray-400 line-clamp-4 md-auto">Little description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat eligendi, ratione quasi nihil illo assumenda optio consectetur tempore quibusdam!</p>
                <span className="text-gray-300 text-sm font-medium block truncate mt-4">Next.js, Next Auth, Stitches, Radix, TypeScript, Prisma, React Query</span>
            </div>
        </div>
    )
}