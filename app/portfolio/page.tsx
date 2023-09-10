import Footer from "../components/footer";
import UXDesign from "../uxdesign/page";
import GraphicDesign from "../graphicdesign/page";
import OtherArt from "../otherart/page";

export default async function PortfolioPage() {

    return (
        <section>
            <div id="sticky-header">
                <a className="link" href="#ux_design_section"><u>UX Design</u></a>
                <span> / </span>
                <a className="link" href="#graphic_design_section"><u>Graphic Design</u></a>
                <span> / </span>
                <a className="link" href="#graphic_design_section"><u>Other Art</u></a>
            </div>
            <a id="ux_design_section"></a>
            <UXDesign/>
            <br/>
            .........
            <br/><br/><br/>
            <a id="graphic_design_section"></a>
            <GraphicDesign/>
            <br/>
            .........
            <br/><br/><br/>
            <a id="other_art_section"></a>
            <OtherArt/>
            <Footer/>
        </section>
    );
}
