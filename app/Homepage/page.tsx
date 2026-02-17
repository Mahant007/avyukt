import HeroSection from "./HeroSection/HeroSection";
import HomeAbout from "./HomeAbout/HomeAbout";
import { homeAboutSection } from "../data/homepage/homeAboutSection";
import { practiceAreasData } from "./BestPractice/data/BestPractice";
import PracticeAreas from "./BestPractice/BestPractices";
import CourtsAuthorities from "./CourtsAuthorities/CourtsAuthorities";
import { courtsAuthoritiesData } from "./CourtsAuthorities/data/courtsAuthoritiesData";
import HowWeWork from "./HowWeWork/HowWeWork";
import { howWeWorkData } from "./HowWeWork/data/howWeWork";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import { whyChooseUsData } from "./whyChooseUs/data/whyChooseUs";

export default function Homepage() {
  return (
    <div className="homepage_container   w-auto">
      <HeroSection />

      <HomeAbout data={homeAboutSection} />

      <PracticeAreas
        title={practiceAreasData.title}
        subtitle={practiceAreasData.subtitle}
        areas={practiceAreasData.areas}
      />

      <CourtsAuthorities
        title={courtsAuthoritiesData.title}
        description={courtsAuthoritiesData.description}
        imageSrc={courtsAuthoritiesData.imageSrc}
        courts={courtsAuthoritiesData.courts}
      />

      {/* <WhyChooseUs
        title={whyChooseUsData.title}
        subtitle={whyChooseUsData.subtitle}
        items={whyChooseUsData.items}
      /> */}

      <HowWeWork
        title={howWeWorkData.title}
        subtitle={howWeWorkData.subtitle}
        steps={howWeWorkData.steps}
      />
    </div>
  );
}
