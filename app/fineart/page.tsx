'use client';
const finalImages = require.context('../../public/images/fineart', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

export default function FineArt() {
    return (
        <section id="fine-art">
            <h2>Fine Art</h2>
            <div id="section-description">
                Personal art featuring landscapes, animals, and people. 
            </div>
            <div id="image-gallery-with-text-overlay">
                {finalImageList.map((image, index) => (
                    <div className="image-1 item2">
                        <img key={index} src={image.default.src} alt={`image-${index}`} />
                        <p>Image Caption</p>
                    </div>
                ))}
            </div>
            <button id="desktop-navbar-button" key="ceo-jess-button">
                <a href="/moreart">See more</a>
            </button>
        </section>
    );
}
