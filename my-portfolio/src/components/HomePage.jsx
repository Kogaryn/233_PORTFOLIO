//IMPORTS


export function HomePage() {
    return (
        
        <div className="mainContainer">
            {/* UP BAR */}
            <div className="topContainer">
                <div className="leftSide">
                <img src="./NU_wordmark.svg.webp" height={50} style={{padding: "10px"}} alt="National University"></img>
                </div>

                <div className="rightSide">
                <h1>Simple Portfolio</h1>
                </div>
            </div>

            {/* BOTTOM BAR - MAIN CONTENT */}
            <div className="bottomContainer">
            
            <div className="informationContainer"><h1>Rynier John Puzon</h1>
            <div className="information">
            
                <div className="right">
                    <img src="https://static.wikitide.net/deathbattlewiki/8/8b/Portrait.denji.png" height={200} alt="Profile Picture" ></img>
                </div>

                <div className="left">
                    <p>Born November 7, 2004, Rynier John Puzon is a 4th-year BSIT-MWA student currently enrolled in NU-MOA. During his stay at NU-MOA, he built "FabriSMART", a Capstone Project and a software solution for WFL Equipment Integrated Corp. FabriSMART is built using React Native and MongoDB for the database. You may visit the website through wflequipment.com</p>
                </div>
            </div>
            </div>
            

            <div className="cardsMainContainer">
                <h1>Skills</h1>
                <div className="cardsContainer">
                    <div className="cards">
                        <h2>Fundamentals</h2>
                        <p>- Java</p>
                        <p>- Python</p>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <p>- JavaScript</p>
                    </div>
                    
                    <div className="cards">
                        <h2>Frontend</h2>
                        <p>- React (JS and Native)</p>
                        <p>- Bootstrap</p>
                    </div>

                    <div className="cards">
                        <h2>Backend</h2>
                        <p>- Node.js (Express)</p>
                        <p>- SpringBoot</p>
                        <p>- Flask (Python)</p>
                    </div>
                    
                    <div className="cards">
                        <h2>Cloud Deployment Software</h2>
                        <p>- Microsoft Azure</p>
                        <p>- DigitalOcean</p>
                        <p>- MongoDB Atlas</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;