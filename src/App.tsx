import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import SkinHealthSection from './components/sections/SkinHealthSection';
import AITechnologySection from './components/sections/AITechnologySection';
import ExpertCareSection from './components/sections/ExpertCareSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <SkinHealthSection />
      <AITechnologySection />
      <ExpertCareSection />
      <TestimonialsSection />
      <ExperienceSection />
      <CTASection />
    </Layout>
  );
}

export default App;
