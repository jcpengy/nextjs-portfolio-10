'use client';
const finalImages = require.context('../../public/images/cartoons', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

export default function Cartoons() {
    return (
        <section id="cartoons">
            <h2>Comics</h2>
            <div id="section-description">
                I draw cartoons about my life sometimes featuring CEO Jess, an ambitious but anxious potato (or Dorito chip!). See more of my unhinged drawings at @officialceojess.
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
                <a href="https://www.instagram.com/officialceojess/">See more on my Instagram</a>
            </button>
        </section>
    );
}
