'use client';
import {initLightboxJS, SlideshowLightbox} from "lightbox.js-react";
import {useEffect} from "react";

const ceojess = [
    {
        src: "https://i.ibb.co/crqpn9P/IMG-9561.jpg",
        alt: "Astrology"
    },
    {
        src: 'https://i.ibb.co/YXwWJ9K/IMG-9214.jpg',
        alt: 'Wine tasting',
    },
    {
        src: 'https://i.ibb.co/5vJtf5K/IMG-8416.png',
        alt: 'SF Hills',
    },
    {
        src: 'https://i.ibb.co/5kkqYW6/IMG-8949.jpg',
        alt: 'Congress1',
    },
    {
        src: 'https://i.ibb.co/nsnCwCD/IMG-8950.jpg',
        alt: 'Congress2',
    },
    {
        src: 'https://i.ibb.co/z7n38WQ/IMG-8951.jpg',
        alt: 'Lady Clingford',
    },
]

export default async function AboutPage() {
    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });
    return (
        <section id="portfolio-page">
            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                {ceojess.map((image) => (
                    <img
                        key={image.src}
                        className='w-full rounded'
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </SlideshowLightbox>
            <br/>
            <div className="md:grid md:grid-cols-2">
                <div>
                    <h2>Hi, I'm Jess 👋</h2>
                    <p>
                        I'm an SF-based Front-End Engineer at Adobe. I build internal tools
                        on the Digital Experience Customer Engineering team.<br/><br/>
                        I'm also an amateur cartoonist. I post regularly on <a target="_blank" href="https://www.instagram.com/officialceojess/">@officialceojess</a>.
                        <a className="link" target="_blank" href="https://i.ibb.co/WkBrpdF/Jessica-Peng-Resume.jpg"><u>Resume</u></a> / <a
                        className="link" target="_blank" href="mailto:pengjess2@gmail.com"><u>Email</u></a> / <a
                        className="link" target="_blank" href="https://www.linkedin.com/in/jess-peng/"><u>LinkedIn</u></a><br/><br/>
                        <span id="dots">.........</span>
                    </p>
                </div>
                <div id="profile-image">
                    <img id="circular--square"
                         key='profile-picture'
                         src='https://i.ibb.co/7pHw7wY/IMG-9588.jpg'
                         alt='Profile picture'
                    />
                </div>
            </div>
            <br/>
            <p>
                At the University of Pennsylvania, I majored in <a className="link" target="_blank" href="http://cg.cis.upenn.edu/dmd.html"><u>Digital
                Media Design</u></a> and minored in Fine Arts with a focus in 3D modeling.<br/><br/>
                <img
                    key={'3dmodel'}
                    className='w-full rounded'
                    src={'https://i.ibb.co/nmXmXp3/IMG-2655-Original.jpg'}
                    alt={'3dmodel'}
                />
                <i>3D model of my college apartment</i><br/><br/>
                As a Front-End Developer at Adobe, I design and build internal tools
                that bridge product gaps and ensure seamless workflows within Experience Cloud. While my
                current focus is in development, I'm excited to expand my design skills on future projects.<br/><br/>
                <h2>My Hobbies & Interests</h2>
                <div className="md:grid md:grid-cols-2">
                <div>
                    <img
                         key='hobbies'
                         src='https://i.ibb.co/8dZGgfj/Cam-Scanner-02-28-2024-17-46-2.jpg'
                         alt='hobbies'
                    />
                </div>
                <div>
                    <ul>
                        <li>Drawing pet portraits</li>
                        <li>Word-search puzzles</li>
                        <li>Dog grooming</li>
                        <li>Tennis</li>
                        <li>Yorkie Reddit threads</li>
                        <li>Reality TV</li>
                    </ul>
                </div>
            </div>
                <br/><br/>
                <h2>My Pets</h2>
                <p>I have a Yorkie named Butters (after the South Park character) and a Roborovski hamster named Abrahammy Lincoln (Hammy for short).</p><br/>
                <img className='w-full rounded'
                     key='pets'
                     src='https://i.ibb.co/GCg3Qbt/784bce54-3d78-4161-8d7b-c2c8cc1630f3.jpg'
                     alt='pets'
                /><br/><br/>
                <p>Thanks for stopping by!</p><br/>
                .........
                <br/>
                <i>© Jessica Peng 2023</i><br/><br/>
            </p>
        </section>
    );
}
