import type { Metadata } from 'next';

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
          I'm a visual thinker who likes creative challenges and learning new things. From
          doodling cartoons and dream houses as a toddler to building hamster cages as a middle schooler,
          I nurtured an interest in both art and engineering that I carried into college and beyond.
          At the University of Pennsylvania, I majored in an interdisciplinary program called Digital Media
          Design and minored in Fine Arts with a focus in 3D modeling. During my time there, I also interned at the
          New York Times where I researched VR technology and contributed graphics on the Immersive Storytelling Team.<br/><br/>
          At Adobe, I've continued to apply and learn creative problem solving skills through a variety of projects.
          As a Technical Consultant, I designed and developed a web application that streamlines documentation of large customer workflows in
          Adobe Campaign Standard. As a Front-End Developer, I've created mock ups and
          developed internal web applications that simplify complex customer data processes
          in Adobe Experience Platform. I love developing simple, intuitive experiences that bring everyday value to
          customers and am excited to take my next leap into design!<br/><br/>
          <h3 className="font-bold text-2xl mb-8 tracking-tighter">fun facts</h3>
          <ul>
            <li>I draw cartoons on <u><a href="https://www.instagram.com/officialceojess/">CEO Jess</a></u>.</li>
            <li>I ran a best-selling, five-star graphic design shop on Etsy.</li>
            <li>My favorite movie is Shrek 2.</li>
          </ul><br/>
          If you have any questions or want to connect, send me an email at pengjess2@gmail.com!:)
        </p>
    </section>
  );
}
