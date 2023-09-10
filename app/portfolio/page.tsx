import Footer from "../components/footer";
import UXDesign from "../uxdesign/page";
import GraphicDesign from "../graphicdesign/page";

export default async function PortfolioPage() {

    return (
        <section>
            <a rel="noopener" target="_blank" href="#ux_design_section">UX Design</a> /
            <a rel="noopener" target="_blank" href="#graphic_design_section">Graphic Design</a>

            <a id="ux_design_section"></a>
            <UXDesign/>
            <br/>
            .........
            <br/><br/><br/>
            <a id="graphic_design_section"></a>
            <GraphicDesign/>
            <br/>
            <Footer/>
        </section>
    );
}
