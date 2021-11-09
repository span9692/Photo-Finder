import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

let lines = [['"Photography is the story I fail to put into words."', "-Destin Sparks"],
['"There is one thing the photo must contain - the humanity of the moment."', '-Robert Frank'],
['"A good snapshot keeps a moment that\'s gone from running away."', '-Eudora Welty'],
['"Photography is the art of making memories tangible."', '-Destin Sparks'],
['"It\'s one thing to make a picture of what a person looks like, it\'s another thing to make a portrait of who they are."', '-Paul Caponigro'],
['"In the world of photography, you get to share a captured moment with other people."', '-James Wilson'],
['"Taking an image, freezing a moment, reveals how rich reality truly is."', '-Anonymous'],
['"The best thing about a picture is that it never changes, even when the people in it do."', '-Andy Warhol'],
['"We are making photographs to understand what our lives mean to us."', '-Ralph Hattersley']
];


function Splash() {
    const [quote, setQuote] = useState(['"We are making photographs to understand what our lives mean to us."', '-Ralph Hattersley'])
    let index = 0;

    useEffect(() => {
        let interval = setInterval(() => {
            setQuote(lines[index])
            index++;
            if (index === lines.length) {
                index = 0;
            };
        }, 6000)
        return () => { clearInterval(interval) }
    }, [])


    return (
        <div>
            <div class='wrapper'>
                <div className='splash'>
                    <div class='tagline'>
                        <span class='caption1 style1'> The Perfect</span>
                        <span class='caption2 style1'>Moment With Us!</span>
                        <div class='get-started'>
                            <NavLink to='/photographers'><button class='start-button'>Get Started</button></NavLink>
                        </div>
                        <div class='quote'>
                            <div id='quote1'>{quote[0]}</div>
                            <div id='quote2'>{quote[1]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
