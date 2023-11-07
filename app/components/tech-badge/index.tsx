

type techBadgeProps = {
    name:string
}

export const TechBadge = ({name,}:techBadgeProps) => {
    return(
        <div>
            <span className='text-purple-400 bg-purple-900/80 text-sm py-1 px-3 rounded-lg'>
            {name}
            </span>
        </div>
    );
}