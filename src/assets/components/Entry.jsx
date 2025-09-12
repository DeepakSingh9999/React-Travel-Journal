import marker from '../images/marker.png'

export default function Entries(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            
            <div className="entry-details">
                <img src={marker} alt="*" className="marker-image"/>
                <span>{props.entry.country}</span>
                <a href={props.entry.googleMapsLink} target='blank'>View on Maps</a>
                <h2>{props.entry.title}</h2>
                <p><b>{props.entry.dates}</b></p>
                <p>{props.entry.text}</p>
            </div>
        </article>
    )
}