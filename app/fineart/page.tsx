'use client';
const finalImages = require.context('../../public/images/fineart', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

export default function FineArt() {
    return (
        <section id="fine-art">
            <div className="two-column-container">
                <div className="column">
                    <h2>Fine Art</h2>
                    <div id="section-description">
                        Personal art featuring landscapes, animals, and people.
                    </div>
                </div>
                <div className="column">
                    <div className="see-more-button-container">
                        <button id="see-more-button" key="ceo-jess-button">
                            <a href="/moreart">View full gallery</a>
                        </button>
                    </div>
                </div>
            </div>
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
