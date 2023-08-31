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

export default async function BlogPage() {
    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });
    return (
        <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h1 className="font-bold text-2xl mb-8 tracking-tighter">hi, i'm jess 👋</h1>
                    <p className="my-5">
                        I'm an SF-based <b>Front-End Engineer at Adobe</b>. I build internal tools
                        on the Digital Experience Customer Engineering team.<br/><br/>
                        I also draw cartoons featuring the character you see on the home page. Her name is CEO
                        Jess. She's a potato.<br/><br/>
                        <a href="mailto:pengjess2@gmail.com">Email</a> / <a
                        href="https://www.linkedin.com/in/jess-peng/">LinkedIn</a> / <a
                        href="https://www.instagram.com/officialceojess/">Github</a><br/><br/>
                        .........
                    </p>
                </div>
                <img
                    key='profile-picture'
                    src='https://i.ibb.co/KFXjJRs/Untitled-36.png'
                    alt='Profile picture'
                />
            </div>
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
            <button id="button"><a href="https://www.instagram.com/officialceojess/">More on my Instagram →
            </a></button>
            <p>
                {/*I love creative challenges and learning new things. From*/}
                {/*doodling cartoons and dream houses as a toddler to building hamster cages as a middle schooler,*/}
                {/*I developed an interest in art and engineering that continued throughout my college and professional*/}
                {/*experiences.<br/><br/>*/}

                At the University of Pennsylvania, I majored in <u><a href="http://cg.cis.upenn.edu/dmd.html">Digital
                Media Design</a></u> and minored in Fine Arts with a
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
                <h1 className="font-bold text-2xl mb-8 tracking-tighter">my hobbies</h1>
                <p>I'm a serial hobbyist who loves working on side projects. Here's what I'm currently doing in my free time.</p>
                <h3 className="font-bold text-2xl mb-8 tracking-tighter">fun facts!</h3>
                <ul>
                    <li>My favorite movie is Shrek 2.</li>
                    <li>My favorite color (and flower) is lavender.</li>
                    <li>I've never had Taco Bell.</li>
                </ul>
            </p>
        </section>
    );
}
