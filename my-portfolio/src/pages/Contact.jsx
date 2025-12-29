import CrimsonWebBackground from "../components/CrimsonWebBackground";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

function Contact() {
    return (
        <PageTransition>
            <div className="
                min-h-screen 
                bg-background 
                text-foreground 
                overflow-x-hidden 
                flex 
                flex-col
            ">

                {/* BACKGROUND EFFECTS */}
                <CrimsonWebBackground />

                {/* NAVBAR */}
                <Navbar />

                {/* MAIN CONTENT */}
                <ContactCard />

                {/* FOOTER */}
                <Footer />
            </div>
        </PageTransition>
    );
}

export default Contact;
