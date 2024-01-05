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
        <section>
            <div className="md:grid md:grid-cols-2">
                <div>
                    <h2>Hi, I'm Jess 👋</h2>
                    <p>
                        I'm an SF-based Front-End Engineer at Adobe. I build internal tools
                        on the Digital Experience Customer Engineering team.<br/><br/>
                        I'm also an amateur cartoonist. I post regularly on @officialceojess.<br/><br/>
                        <object data="../JessicaPengResume_.pdf" type="application/pdf" width="100%" height="500px"></object>
                        <a className="link" target="_blank" href="../JessicaPengResume_.pdf"><u>Resume</u></a> / <a
                        className="link" target="_blank" href="mailto:pengjess2@gmail.com"><u>Email</u></a> / <a
                        className="link" target="_blank" href="https://www.linkedin.com/in/jess-peng/"><u>LinkedIn</u></a> / <a
                        className="link" target="_blank" href="https://www.instagram.com/officialceojess/"><u>Github</u></a><br/><br/>
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
            <button id="button"><a target="_blank" href="https://www.instagram.com/officialceojess/">More on my
                Instagram →
            </a></button>
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
                current focus is in development, I enjoy all aspects of the design process and
                hope to expand my product/user research and visual skills on future projects.<br/><br/>
                <h2>My Hobbies</h2>
                <p>Aside from cartooning, here's what I'm also doing in my free time.</p>
                {/*<h3 className="font-bold text-2xl mb-8 tracking-tighter">fun facts</h3>*/}
                <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                    <div className="hobby">
                        <img className="hobby-pic"
                             key='drawing'
                             src='https://i.ibb.co/GPT4B3j/drawing.png'
                             alt='drawing'
                        />
                        <i>Drawing portraits</i>
                    </div>
                    <div className="hobby">
                        <img className="hobby-pic"
                             key='tennis'
                             src='https://i.ibb.co/GHQqLV3/tennis.png'
                             alt='tennis'
                        />
                        <i>Playing tennis</i>
                    </div>
                    <div className="hobby">
                        <img className="hobby-pic"
                             key='dog'
                             src='https://i.ibb.co/HdscHRF/dog.png'
                             alt='dog'
                        />
                        <i>Dog sitting</i>
                    </div>
                </div>
                <img className='w-full rounded'
                     key='hamster'
                     src='https://i.ibb.co/F4017wC/62-F4-F96-B-BA84-42-BE-AD23-70-D400-F5990-D.jpg'
                     alt='hamster'
                />
                <i>Hammy:)</i><br/><br/>
                <p>Thanks for stopping by!</p><br/><br/>
                .........
                <br/>
                <i>© Jessica Peng 2023</i>
            </p>
        </section>
    );
}
