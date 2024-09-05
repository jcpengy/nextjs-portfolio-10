'use client';
const finalImages = require.context('../../public/images/cartoons', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

export default function Cartoons() {
    return (
        <section id="cartoons">
            <h2>CEO Jess</h2>
            <div id="section-description">
                My semi-autobiographical cartoon featuring a potato. <u><a href="https://instagram.com/officialceojess/">View more of my drawings at @officialceojess.</a></u>
            </div>
            {/* <div className="two-column-container">
                <div className="column">
                    
                </div> */}
            {/* <div className="column">
                    <div className="see-more-button-container">
                        <button id="see-more-button" key="ceo-jess-button">
                            <a href="https://www.instagram.com/officialceojess/">View more on Instagram</a>
                        </button>
                    </div>
                </div> */}
            {/* </div> */}
            <div id="image-gallery-with-text-overlay">
                {finalImageList.map((image, index) => (
                    <div className="image-1 item2">
                        <img key={index} src={image.default.src} alt={`image-${index}`} />
                        <p>Image Caption</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
