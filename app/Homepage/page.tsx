import HeroSection from "./HeroSection/HeroSection";
import HomeAbout from "./HomeAbout/HomeAbout";
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

      <HomeAbout
        title="About Avyukt Associates"
        description="Avyukt Associates is a law firm based in Ahmedabad, Gujarat, providing legal services in civil, criminal, and revenue-related matters. The firm undertakes legal representation, advisory work, and drafting services in accordance with applicable laws and professional standards."
        firmName="Avyukt Associates"
        leaderName="Advocate Sweta Namalvar"
        location="Ahmedabad, Gujarat"
        imageSrc="/Images/aboutsection.jpg"
        imagePosition="right"
        readMoreLink="/About"
      />

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
