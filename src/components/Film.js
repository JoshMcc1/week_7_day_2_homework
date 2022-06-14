import React from "react";

const Film = ({ film }) => {
    const myStyle = {
        padding: 6
    }
    return (
        <>
            <li style={myStyle}>
                <a style={myStyle} href={film.url} target="_blank">{film.name}</a>
            </li>

        </>
    );
};

export default Film;