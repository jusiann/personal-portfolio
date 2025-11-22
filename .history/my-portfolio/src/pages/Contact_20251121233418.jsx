import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {ContactCard} from "../components/ContactCard";

export const Contact = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <CrimsonWebBackground />
                <Navbar />
                <ContactCard />
            </div>
        </PageTransition>
    );
};
