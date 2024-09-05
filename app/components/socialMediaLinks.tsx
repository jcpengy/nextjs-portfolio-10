import InstagramIcon from "../../public/images/icons8-instagram.svg";
import LinkedInIcon from "../../public/images/icons8-linkedin.svg";
import BehanceIcon from "../../public/images/icons8-behance.svg";
export default function SocialMediaLinks() {
    return (
        <section id="social-media-links">
            <img className="social-media-link" src={InstagramIcon.src} alt="LinkedIn"/>
            <img className="social-media-link" src={LinkedInIcon.src} alt="Instagram"/>
            {/* <img className="social-media-link" src={BehanceIcon.src} alt="Behance"/> */}
        </section>
    )
}