import Footer from "../components/footer";
import UXDesign from "../uxdesign/page";
import GraphicDesign from "../graphicdesign/page";
import OtherArt from "../art/page";

export default async function PortfolioPage() {

    return (
        <section>
            <div id="sticky-header">
                <a className="link" href="#graphic_design_section"><u>Graphic Design</u></a>
                <span> / </span>
                {/*<a className="link" href="#other_art_section"><u>Fine Art</u></a>*/}
                {/*<span> / </span>*/}
                <a className="link" href="#ux_design_section"><u>UX Design</u></a>
            </div>
            <a id="graphic_design_section"></a>
            <GraphicDesign/>
            <br/>
            <p id="portfolio-page">.........</p>
            <br/><br/><br/>
            <a id="ux_design_section"></a>
            <UXDesign/>
            <Footer/>
        </section>
    );
}
