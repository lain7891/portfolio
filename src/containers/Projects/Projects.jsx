import React from 'react';
import Card from "../../component/Card/Card"

// const styles = {
//     hero: {
//         position: "relative",
//         overflow: "hidden-background",
//         position: "absolute",
//         objectFit: "cover",
//         objectPosition: "center center",
//         width: 100,
//         height: 100,
//         opacity: 0.3
//     }
// }

const Projects = () => {
    return (
        // <div style={{backgroundImage: `url("https://wallpapercave.com/wp/ZEBuAbe.jpg")`}} >
        //     <h1>This is my About Page</h1>
        // </div>
        <>
    
        <Card title="Project-1" 
                description="testing data"
        />
        <Card title="Project-2"/>
        <Card title="Project-3"/>
        </>
    );
};

export default Projects;