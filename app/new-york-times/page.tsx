'use client';
import Footer from "../components/footer";
import SyriaOriginal from "public/images/nyt-cover.jpg";

export default async function NewYorkTimes() {
    return (
        <section id="portfolio-page">
            <h3 id="all-caps">THE NEW YORK TIMES</h3>
            <p>Cover art and graphics I created for two high-profile breaking news pieces as a Graphics Intern.
                <br/><br/>
                Credits: <a className="link" target="_blank" href="https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html"><u>"Step Inside the Thai Cave in Augmented Reality"</u></a><br/>
                <a className="link" target="_blank" href="https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html?mtrref=undefined&gwh=F58C966F1C905F9A7F76DD29F76E6E44&gwt=pay&assetType=PAYWALL"><u>"How We Created a Virtual Crime Scene to Investigate Syria's Chemical Attack"</u></a>
            </p>
            <br/>
            <img
                    id="centered-caption"
                    key='syria'
                    src={SyriaOriginal}
                    alt='syria'
                />
                <br/>
            <img
                    id="centered-caption"
                    key='syria'
                    src="https://i.ibb.co/CMchfKW/Screen-Shot-2023-11-27-at-2-58-22-PM.png"
                    alt='syria'
                />
                <br/>
                <img
                key='thai'
                className='w-full rounded'
                src='https://i.ibb.co/z4Sc5R5/thai.png'
                alt='thai cave'
            />
            <Footer/>
        </section>
    );
}
