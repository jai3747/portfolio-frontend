import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  try {
    // Add timeout and error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      signal: controller.signal,
      next: { revalidate: 3600 } // Optional: cache for 1 hour
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();

    // Safely filter and randomize blogs with cover images
    const filtered = data
      ?.filter((item) => item?.cover_image)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6) || []; // Limit to 6 blogs

    return filtered;
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return []; // Return empty array instead of throwing
  }
}

export default async function Home() {
  let blogs = [];
  try {
    blogs = await getData();
  } catch (error) {
    console.error('Failed to load blogs', error);
  }

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects blogs={blogs} /> {/* Optional: pass blogs to Projects */}
      <Education />
      <ContactSection />
    </div>
  );
}