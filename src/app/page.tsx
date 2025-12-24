import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Projects } from '@/components/home/Projects';
import { Contact } from '@/components/home/Contact';
import { PersonJsonLd, WebsiteJsonLd } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
