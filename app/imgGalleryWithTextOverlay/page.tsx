"use client"

export function ImgGalleryWithTextOverlay({ images }) {
    return (
        <section id="image-gallery-with-text-overlay">
            <div className="gallery-container">
                {
                    images.map((image: { src: string; alt: string }) => {
                        return (
                            <div className="image-box">
                                <img src={image.src} alt={image.alt}/>
                                <div className="bottom-left-image-title">{image.alt}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
