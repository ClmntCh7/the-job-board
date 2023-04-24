const Job = (props) => {
const {className, title, contractType, country, city } = props;

    return (
        <div className={className} >
            <h2>{title}</h2>
            <p>{contractType} - {city} - {country}</p>
        </div>
    );
}

export default Job