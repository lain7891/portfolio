import React from 'react';
import Card from "../../component/Card/Card"
import Know from "../../assets/know-before-you-go.png"

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
        <div className="columns">
            <div className="column">
            <Card src={Know} title="Know Before You Go" 
                description="testing data"
        />
            </div>
            <div className="column">
            <Card title="Project-2"/>
            </div>
            <div className="column">
            <Card title="Project-3"/>
                </div>
        </div>
    
        
      
      
        </>
    );
};

export default Projects;