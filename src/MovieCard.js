import React from 'react'

export default function MovieCard(props) {
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
                    alt={props.movie.title + ' poster'} 
                    className="card--img"/>
            <div className="card--content">
                <h3 className="card--title">{props.movie.title}</h3>
                <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
                <p><small>RATING:{props.movie.vote_average}</small></p>
                <p className="card--descr">{props.movie.overview}</p>
            </div>
        </div>
    )
}