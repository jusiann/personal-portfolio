import CrimsonWebBackground from "./CrimsonWebBackground";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";
import Footer from "./Footer";

function Layout({
    children,
    showFooter = true,
    showNavbar = true,
    showBackground = true
}) {
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
                {showBackground && <CrimsonWebBackground />}

                {/* NAVBAR */}
                {showNavbar && <Navbar />}

                {/* MAIN CONTENT */}
                {children}

                {/* FOOTER */}
                {showFooter && <Footer />}
            </div>
        </PageTransition>
    );
}

export default Layout;
