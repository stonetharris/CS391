function University({ university }) {
    return (
        <div className='col-3'>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>{university.name}</h3>
                    <p>{`Country: ${university.country}`}</p>
                    <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">Website</a>
                </div>
            </div>
        </div>
    );
}

export default University;
