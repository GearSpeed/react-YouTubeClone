import Categories from "./Categories";
import Video from './Video';

export default function Content(){

    const videos = [
        {
            image:'https://i.ytimg.com/vi/77mt63A_DWw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsDMIUEOzjgSnRy2T_VjFGSIrH8Q',
            title:'Esto es lo que le OFRECIÓ ESTADOS UNIDOS a MADURO para que dejara LA PRESIDENCIA!',
            chanel:'Tu COSMOPOLIS1'
        },
        {
            image:'https://i.ytimg.com/vi/fhYLkJlzaIE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKZ6NWv6XojBkDIIzF-bmn1b90Ow',
            title:'Angela Panini',
            chanel:'Tu COSMOPOLIS2'
        },
        {
            image:'https://i.ytimg.com/vi/77mt63A_DWw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsDMIUEOzjgSnRy2T_VjFGSIrH8Q',
            title:'Esto es lo que le OFRECIÓ ESTADOS UNIDOS a MADURO para que dejara LA PRESIDENCIA!',
            chanel:'Tu COSMOPOLIS1'
        },
    ]

    return (
    <section className="col-start-2 col-end-3 row-start-2 row-end-3">
        <Categories />
        <section className="grid grid-cols-4 gap-4 pt-4">
            {videos.map((video)=>{
                return (
                    <Video 
                        key={`video-${video.title}`}
                        image = {video.image}
                        title = {video.title}
                        channel={video.chanel} />
                )
            })}
        </section>
    </section>)
}