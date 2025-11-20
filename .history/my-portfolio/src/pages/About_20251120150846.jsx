import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {useLanguage} from "../lib/utils";
import {motion} from "framer-motion";

export const About = () => {
    const {t} = useLanguage();

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    };

    return (
        <PageTransition>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <CrimsonWebBackground />
            <Navbar />
            
            <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    <motion.div variants={itemVariants} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
                            {t('about_title')}
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            {t('about_subtitle')}
                        </p>
                    </motion.div>

                    <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                            <span className="text-4xl">👤</span>
                            {t('personal_info')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 text-foreground/80">
                            <div>
                                <span className="font-semibold text-primary">{t('name_label')}:</span> {t('profile_name')} {t('profile_surname')}
                            </div>
                            <div>
                                <span className="font-semibold text-primary">{t('role_label')}:</span> {t('hero_subtitle')}
                            </div>
                        </div>
                        <p className="mt-4 text-foreground/70 leading-relaxed">
                            {t('profile_tagline')}
                        </p>
                    </motion.section>

                    <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="text-4xl">💻</span>
                            {t('tech_skills_title')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-3">{t('frontend_label')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {t('frontend_skills').map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-3">{t('backend_label')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {t('backend_skills').map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-3">{t('tools_label')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {t('tools_skills').map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-3">{t('languages_label')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {t('programming_languages').map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="text-4xl">🎓</span>
                            {t('education_title')}
                        </h2>
                        <div className="space-y-4">
                            {t('education_items').map((edu, i) => (
                                <div key={i} className="border-l-4 border-primary pl-4">
                                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                                    <p className="text-primary font-medium">{edu.school}</p>
                                    <p className="text-sm text-foreground/60">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="text-4xl">💼</span>
                            {t('experience_title')}
                        </h2>
                        <div className="space-y-6">
                            {t('experience_items').map((exp, i) => (
                                <div key={i} className="border-l-4 border-primary pl-4">
                                    <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                    <p className="text-sm text-foreground/60 mb-2">{exp.period}</p>
                                    <p className="text-foreground/70">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-8 shadow-lg">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="text-4xl">🌐</span>
                            {t('spoken_languages_title')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {t('spoken_languages').map((lang, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                                    <span className="font-semibold text-foreground">{lang.name}</span>
                                    <span className="text-primary font-medium">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </div>
        </PageTransition>
    );
};