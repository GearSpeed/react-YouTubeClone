export default function Categories() {
    const categories = [
        "All",
        "Music",
        "Gaming",
        "Code",
        "Programing",
        "Life Style",
        "Sports",
    ]
    return(
        <div className="flex flex-row gap-4">
            {
                categories.map((category) => {
                    return <span key = {`category-${category}`} 
                    className="pt-2 pb-2 pl-4 pr-4 rounded-2xl bg-[#282828]"> {category} </span>
                })
            }
        </div>
    )
}