import type { Metadata } from 'next';
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: 'About',
  description: 'About',
};

export default async function BlogPage() {

  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h1 className="font-bold text-2xl mb-8 tracking-tighter">hi, i'm jess 👋</h1>
          <p className="my-5">
            I'm an SF-based <b>Front-End Engineer at Adobe</b>. I build internal tools
            on the Digital Experience Customer Engineering team.<br/><br/>
            I also draw cartoons on Instagram about the character you see on the home page. Her name is CEO Jess.<br/><br/>
            <a href="mailto:pengjess2@gmail.com">Email</a> / <a href="https://www.linkedin.com/in/jess-peng/">LinkedIn</a> / <a href="https://www.instagram.com/officialceojess/">Instagram</a><br/><br/>
            .........
          </p>
        </div>
        <img
            key='profile-picture'
            src='https://i.ibb.co/KFXjJRs/Untitled-36.png'
            alt='Profile picture'
        />
      </div>
        <p>
          I love creative challenges and learning new things. From
          doodling cartoons and dream houses as a toddler to building hamster cages as a middle schooler,
          I developed an interest in art and engineering that continued throughout my college and professional experiences.<br/><br/>

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
          As both a designer and developer at Adobe (and previously a consultant), I've gained experience in all areas
           of the product lifecycle and currently strive to build internal web tools that are simple,
          intuitive, and accessible. Although I enjoy seeing
          my ideas come to life through development, I'm excited to focus on and grow my design skills on upcoming projects.<br/><br/>
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
