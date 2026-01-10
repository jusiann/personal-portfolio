import {useLanguage} from '../lib/utils';
import profileData from '../data/profile.json';

function Footer() {
    const {translate} = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 mt-auto max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
            <p className="text-foreground/60 text-sm">
                © {currentYear} {profileData.name}
            </p>
            <p className="text-foreground/60 text-sm">
                {translate('common.rights_reserved')}
            </p>
        </footer>
    );
}

export default Footer;
