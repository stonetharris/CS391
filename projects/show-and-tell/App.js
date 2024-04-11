import React, { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './App.css';

function App() {
    const refs = useRef([]);
    refs.current = [];

    const addToRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    const tileContent = {
        click: {
            imageUrl: "/clickImage.png",
            text: "My name is Frederic, I am a Senior at BU studying Computer Science."
        },
        hover: {
            imageUrl: "/hoverImage.jpg",
            text: "My name is Stone, I am a Senior at BU studying Computer Science"
        }
    };

    return (
        <div className="appContainer">
            <header className="appHeader">
                Show and Tell: React Flippy Feature
            </header>
            <div className="tilesContainer">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Flippy
                        key={index}
                        flipOnHover={index >= 3} // Tiles 4-6 flip on hover
                        flipOnClick={index < 3} // Tiles 1-3 flip on click
                        flipDirection="horizontal"
                        ref={addToRefs}
                        style={{ width: '200px', height: '200px', margin: '10px' }}
                    >
                        <FrontSide style={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={index < 3 ? tileContent.click.imageUrl : tileContent.hover.imageUrl} alt="Tile" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </FrontSide>
                        <BackSide style={{ backgroundColor: '#175852', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                            <p>{index < 3 ? tileContent.click.text : tileContent.hover.text}</p>
                        </BackSide>
                    </Flippy>
                ))}
            </div>
        </div>
    );
}
export default App;