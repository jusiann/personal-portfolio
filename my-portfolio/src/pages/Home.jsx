import CrimsonWebBackground from "../components/CrimsonWebBackground";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";

function Home() {
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
                <HomeCard />

                {/* FOOTER */}
                <Footer />
            </div>
        </PageTransition>
    );
}

export default Home;