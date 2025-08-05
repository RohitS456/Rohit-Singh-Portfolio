import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Full-Stack Web Developer",
                    "API & Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
