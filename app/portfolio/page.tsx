import Footer from "../components/footer";
import UXDesign from "../uxdesign/page";
import GraphicDesign from "../graphicdesign/page";

export default async function PortfolioPage() {

    return (
        <section>
            <UXDesign/>
            <GraphicDesign/>
            <Footer/>
        </section>
    );
}
