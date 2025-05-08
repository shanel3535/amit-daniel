
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // First show the logo and image animation
    setTimeout(() => {
      setIsLoading(false);
      // Then after the logo animation is complete, show the rest of the content
      setTimeout(() => {
        setShowContent(true);
      }, 1800); // Giving a bit more time for the logo animation to be appreciated
    }, 300);
  }, []);

  useEffect(() => {
    // Only setup scroll animations after main content is visible
    if (!showContent) return;
    
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
  }, [showContent]);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-to-content">דלג לתוכן העיקרי</a>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          {/* Moved elements more to the left with ml-auto and added animations */}
          <div className="flex flex-row items-center justify-center gap-2 ml-auto pr-8 md:pr-12">
            <img
              src="/lovable-uploads/2674af9d-8a97-4a68-9e63-c7c88e73ba4f.png"
              alt="עמית דניאל"
              className="w-32 sm:w-48 md:w-64 h-auto rounded-full object-cover shadow-xl animate-float"
            />
            <img
              src="/lovable-uploads/9f5df582-db78-4848-a356-17011726d7d5.png"
              alt="ELLE Logo"
              className="w-56 sm:w-72 md:w-[450px] h-auto animate-pulse"
            />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          {showContent ? (
            <main id="main" className="animate-fade-in">
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <Contact />
            </main>
          ) : (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-40">
              {/* Moved elements more to the left with ml-auto and added animations */}
              <div className="flex flex-row items-center justify-center gap-2 ml-auto pr-8 md:pr-12">
                <img
                  src="/lovable-uploads/2674af9d-8a97-4a68-9e63-c7c88e73ba4f.png"
                  alt="עמית דניאל"
                  className="w-32 sm:w-48 md:w-64 h-auto rounded-full object-cover shadow-xl animate-float"
                />
                <img
                  src="/lovable-uploads/9f5df582-db78-4848-a356-17011726d7d5.png"
                  alt="ELLE Logo"
                  className="w-56 sm:w-72 md:w-[450px] h-auto animate-pulse"
                />
              </div>
            </div>
          )}
          <Footer />
          <AccessibilityWidget />
        </>
      )}
    </div>
  );
};

export default Index;
