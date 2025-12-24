import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Projects } from '@/components/home/Projects';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
