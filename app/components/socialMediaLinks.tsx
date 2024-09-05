import InstagramIcon from "../../public/images/icons8-instagram.svg";
import LinkedInIcon from "../../public/images/icons8-linkedin.svg";
import BehanceIcon from "../../public/images/icons8-behance.svg";
export default function SocialMediaLinks() {
    return (
        <section id="social-media-links">
            <a href="https://linkedin.com/in/jess-peng"><img className="social-media-link" src={LinkedInIcon.src} alt="LinkedIn"/></a>
            <a href="https://instagram.com/officialceojess"><img className="social-media-link" src={InstagramIcon.src} alt="Instagram"/></a>
            {/* <img className="social-media-link" src={BehanceIcon.src} alt="Behance"/> */}
        </section>
    )
}