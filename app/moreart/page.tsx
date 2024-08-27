'use client';

import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
const currentImages = require.context('../../public/images/moreart/current', false);
const currentImageList = currentImages.keys().map(image => currentImages(image));
const miscImages = require.context('../../public/images/moreart/misc', false);
const miscImageList = miscImages.keys().map(image => miscImages(image));
const paintingImages = require.context('../../public/images/moreart/paintings', false);
const paintingImageList = paintingImages.keys().map(image => paintingImages(image));
const pencilImages = require.context('../../public/images/moreart/pencil', false);
const pencilImageList = pencilImages.keys().map(image => pencilImages(image));
export default function MoreArt() {
    return (
        <>
            <DesktopNavbar />
            <section id="more-art">
                <h2>Personal Art</h2>
                <div id="section-description">
                    Currently working on a large-scale oil painting of Ocean Beach.
                </div>
                <div id="image-gallery-with-text-overlay">
                    {currentImageList.map((image, index) => (
                        <div className="image-1 item2">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>
                    ))}
                </div>
                <div id="section-description">
                    <h3>Paintings</h3>
                </div>
                <div id="image-gallery-with-text-overlay">
                    {paintingImageList.map((image, index) => (
                        <div className="image-1 item2">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>
                    ))}
                </div>
                <div id="section-description">
                    <h3>Pencil drawings</h3>
                </div>
                <div id="image-gallery-with-text-overlay">
                    {pencilImageList.map((image, index) => (
                        <div className="image-1 item2">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>
                    ))}
                </div>
                <div id="section-description">
                    <h3>Other</h3>
                </div>
                <div id="image-gallery-with-text-overlay">
                    {miscImageList.map((image, index) => (
                        <div className="image-1 item2">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>
                    ))}
                </div>
                <div className="back-button-container">
                    <button id="see-more-button" key="ceo-jess-button">
                        <a href="/">Back</a>
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}
