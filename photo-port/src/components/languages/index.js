import React from "react";

function languages(props) {

    return props.languages.map(technology => {
            return <li className="languages">{technology}</li>
    })
}

export default languages;