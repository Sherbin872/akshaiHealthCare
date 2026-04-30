import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Plans from "../components/Plans";
import Benefits from "../components/Benefits";
import DownloadSection from "../components/DownloadSection";
import About from "../components/About";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Process />
            <Plans />
            <Benefits />
            <DownloadSection />
            <About />
            <CTA />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;