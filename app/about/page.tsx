'use client';
import Footer from "../components/footer";
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
                        I'm an SF-based <b>Front-End Engineer at Adobe</b>. I build internal tools
                        on the Digital Experience Customer Engineering team.<br/><br/>
                        I'm also an amateur cartoonist. I post regularly on @officialceojess.<br/><br/>
                        <a href="mailto:pengjess2@gmail.com">Email</a> / <a
                        href="https://www.linkedin.com/in/jess-peng/">LinkedIn</a> / <a
                        href="https://www.instagram.com/officialceojess/">Github</a><br/><br/>
                        <span id="dots">.........</span>
                    </p>
                </div>
                <div id="profile-image">
                    <img id="circular--square"
                         key='profile-picture'
                         src='https://i.ibb.co/wzT5vZV/IMG-8872.jpg'
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
            <button id="button"><a id="button-text" href="https://www.instagram.com/officialceojess/">More on my
                Instagram →
            </a></button>
            <p>
                <br/>
                {/*I love creative challenges and learning new things. From*/}
                {/*doodling cartoons and dream houses as a toddler to building hamster cages as a middle schooler,*/}
                {/*I developed an interest in art and engineering that continued throughout my college and professional*/}
                {/*experiences.<br/><br/>*/}
                At the University of Pennsylvania, I majored in <a href="http://cg.cis.upenn.edu/dmd.html">Digital
                Media Design</a> and minored in Fine Arts with a
                focus in 3D modeling. I also interned at the
                New York Times where I researched VR/AR technology on the Immersive Storytelling Team.<br/><br/>
                <img
                    key={'3dmodel'}
                    className='w-full rounded'
                    src={'https://i.ibb.co/nmXmXp3/IMG-2655-Original.jpg'}
                    alt={'3dmodel'}
                />
                <i>3D model of my college apartment</i><br/><br/>
                As both a designer and developer at Adobe (and previously a consultant), I've gained experience in all
                areas of the product lifecycle and currently strive to build internal web tools that are simple,
                intuitive, and accessible. Although I enjoy seeing
                my ideas come to life through development, I'm excited to focus on and grow my design skills on upcoming
                projects.<br/><br/>
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
                        <i>Watching dogs</i>
                    </div>
                </div>
                <p>Thanks for stopping by!</p><br/><br/>
                .........
                <br/>
                <i>© Jessica Peng 2023</i>
            </p>
        </section>
    );
}
