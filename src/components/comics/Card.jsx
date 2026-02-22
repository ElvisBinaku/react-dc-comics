
const Card = (props) => {
    return (
        <div className="container justify-content-center comics-wrapper">
            {props.dati.map((SingleData) => (
                <div className="comic-card px-2" key={SingleData.id}>
                    <img src={SingleData.thumb} alt={SingleData.description} />
                    <h3 className="mt-2 text-white">{SingleData.title.toUpperCase()}</h3>
                </div>
            ))}
        </div>
    )
}

export default Card