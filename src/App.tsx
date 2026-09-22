import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Ministries } from '@/components/Ministries';
import { BibleCollege } from '@/components/BibleCollege';
import { Outreach } from '@/components/Outreach';
import { ServiceTimes } from '@/components/ServiceTimes';
import { Scripture } from '@/components/Scripture';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Prayer } from '@/components/Prayer';
import { SocialMedia } from '@/components/SocialMedia';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ministries />
        <BibleCollege />
        <Outreach />
        <ServiceTimes />
        <Scripture />
        <Gallery />
        <Testimonials />
        <Prayer />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
