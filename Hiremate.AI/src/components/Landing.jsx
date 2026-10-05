import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import Footer from './Footer';

const Landing = ({ onOpenAuth }) => {
  return (
    <>
      <Hero onOpenAuth={onOpenAuth} />
      <Features />
      <HowItWorks />
      <WhyChooseUs onOpenAuth={onOpenAuth} />
      <Testimonials />
      <CTASection onOpenAuth={onOpenAuth} />
      <Footer />
    </>
  );
};

export default Landing;
