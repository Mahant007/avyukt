import { aboutData } from "../data/about/about";
import AboutHero from "../component/about/AboutHero";
import AboutIntro from "../component/about/AboutIntro";
import AboutGoals from "../component/about/AboutGoals";
import WhyChooseUs from "../component/about/WhyChooseUs";
import TeamSection from "../component/about/TeamSection";
// import OurTeam from "../components/OurTeam";

export default function AboutPage() {
  return (
    <>
      <AboutHero data={aboutData.hero} />
      <AboutIntro data={aboutData.intro} />
      <AboutGoals data={aboutData.goals} />
      <WhyChooseUs data={aboutData.whyChooseUs} />
      {/* <OurTeam data={aboutData.team} /> */}
      <TeamSection />

      <section style={{ padding: "3rem", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          {aboutData.disclaimer}
        </p>
      </section>
    </>
  );
}
