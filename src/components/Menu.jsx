export default function Menu(){
    // list rendering

    const menuItems = [
        { icon: '🏠', text: 'Home'},
        { icon: '🩳', text: 'Shorts'},
        { icon: '🕛', text: 'Suscrption'}
    ]

    return (
        <aside id="menu">
            {
                menuItems
                .filter((item) => !item.text.startsWith("S"))
                .map((item) => {
                    return (
                        <div key={`menu-item-${item.text}`} className="menu-item">
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    );
                })
            }
        </aside>
    )
}