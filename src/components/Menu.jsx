export default function Menu(){
    // list rendering

    const menuItems = [
        { icon: '🏠', text: 'Home'},
        { icon: '🩳', text: 'Shorts'},
        { icon: '🕛', text: 'Suscrption'}
    ]

    return (
        <aside className="col-start-1 col-end-2 row-start-2 row-end-3">
            {
                menuItems
                .filter((item) => !item.text.startsWith("I"))
                .map((item) => {
                    return (
                        <div key={`menu-item-${item.text}`} className="p-4 rounded-2xl flex flex-row gap-2 items-center hover:bg-[#282828]">
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    );
                })
            }
        </aside>
    )
}