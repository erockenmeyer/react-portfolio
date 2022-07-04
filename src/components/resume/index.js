import React from "react";

function Resume() {
    return (
        <main className="text-center">
            <h1>My Resume</h1>
            <div>
                <h3>My Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>SQL</li>
                    <li>APIs</li>
                    <li>MongoDB</li>
                    <li>Git/github</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>JSON</li>
                    <li>GraphQL</li>
                    <li>Salesforce</li>
                    <li>MVC</li>
                </ul>
            </div>
            <div>
                <h4><a className="site-name" href={require('../../assets/Erik Rockenmeyer Resume.pdf')} download="Erik Rockenmeyer Resume">Download my Resume</a></h4>
            </div>
        </main>
    )
}

export default Resume;