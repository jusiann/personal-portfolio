import { useLanguage } from "../lib/utils";

export const Footer = () => {
    const { translate } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">

                    {/* COPYRIGHT */}
                    <p className="text-foreground/60 text-sm">
                        © {currentYear} {translate('home.name')} {translate('home.surname')}
                    </p>

                    {/* RIGHTS RESERVED */}
                    <p className="text-foreground/60 text-sm">
                        {translate('common.rights_reserved')}
                    </p>
                </div>
            </div>
        </footer>
    );
};
