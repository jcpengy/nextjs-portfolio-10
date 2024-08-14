"use client"

export default function ImgGalleryWithTextOverlay({ images }) {
    return (
        <section id="image-gallery-with-text-overlay">
            <div className="gallery-container">
                {
                    images.map(image => {
                        return (
                            <div className="image-box">
                                <img src={image.src} alt={image.alt} />
                                <div className="bottom-left-image-title">{image.alt}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
