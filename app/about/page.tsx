import type { Metadata } from 'next';
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: 'About',
  description: 'About',
};

export default async function BlogPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">hi, i'm jess 👋</h1>
      <p className="my-5">
        I'm an SF-based <b>Front-End Engineer at Adobe</b>. I build internal tools
        on the Digital Experience Customer Engineering team.
      </p>
        <hr/><br/>
        <p>
          I love creative challenges and learning new things. From
          doodling cartoons and dream houses as a toddler to building hamster cages as a middle schooler,
          I developed an interest in art and engineering that continued throughout my college and professional experiences.<br/><br/>

          At the University of Pennsylvania, I majored in <u><a href="https://www.instagram.com/officialceojess/">Digital
          Media Design</a></u> and minored in Fine Arts with a
          focus in 3D modeling. I also interned at the
          New York Times where I researched VR technology and contributed graphics on the Immersive Storytelling Team.<br/><br/>
          <img
              key={'3dmodel'}
              className='w-full rounded'
              src={'https://i.ibb.co/nmXmXp3/IMG-2655-Original.jpg'}
              alt={'3dmodel'}
          />
          3D model I created of my college apartment<br/><br/>
          At Adobe, I've been able to apply and learn creative problem solving skills through a variety of projects.
          As a Front-End Developer, I assume the role of both designer and developer to create internal web
          applications that simplify customer data processes in Adobe Experience Platform. I love seeing my ideas come to
          life through development, but I'm excited to focus on and grow my design skills on upcoming projects.<br/><br/>
          <h3 className="font-bold text-2xl mb-8 tracking-tighter">fun facts!</h3>
          <ul>
            <li>I draw cartoons on <u><a href="https://www.instagram.com/officialceojess/">CEO Jess</a></u>.</li>
            <li>I ran a best-selling, five-star graphic design shop on Etsy.</li>
            <li>My favorite movie is Shrek 2.</li>
            <li>My favorite class in college was Costume Design.</li>
          </ul><br/>
          If you want to connect or collaborate on a project, send me an email at pengjess2@gmail.com!:)
        </p>
      <Footer/>
    </section>
  );
}
