'use client';
const finalImages = require.context('../../public/images/cartoons', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

export default function Cartoons() {
    return (
        <section id="cartoons">
            <h2>Comics</h2>
            <div id="section-description">
                CEO Jess is a semi-autobiographical comic starring an anxious potato. <u><a href="https://instagram.com/officialceojess/">View my world class drawings at @officialceojess.</a></u>
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
