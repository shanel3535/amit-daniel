
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const Index = () => {
  useEffect(() => {
    // Function to add animation classes when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.add("opacity-100");
            // Once the animation has been triggered, we can stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Element comes into view when 15% of it is visible
    );

    // Find all major section headlines and observe them
    document.querySelectorAll("section h2").forEach((element) => {
      element.classList.add("opacity-0");
      observer.observe(element);
    });

    // Find paragraphs in sections and observe them
    document.querySelectorAll("section > div > p").forEach((element) => {
      element.classList.add("opacity-0");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-to-content">דלג לתוכן העיקרי</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};

export default Index;
