import React from "react";

const MoreReleasesButton = () => {
    const myStyle = {
        backgroundColor: "lightblue",
        padding: 10
    }
    return (
        <button style={myStyle}> <a href="https://www.imdb.com/calendar/?region=gb" target="_blank">View more upcoming releases</a></button >
    );
};

export default MoreReleasesButton