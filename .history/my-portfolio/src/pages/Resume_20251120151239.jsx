import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {useLanguage} from "../lib/utils";
import {Briefcase, GraduationCap, Code2, Award} from "lucide-react";

export const Resume = () => {
    const {t} = useLanguage();

    return (
        <PageTransition>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <CrimsonWebBackground />
                <Navbar />
                
                <div className="container mx-auto px-6 pt-32 pb-20">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 animate-fade-in">
                            {t('resume_title')}
                        </h1>
                        <p className="text-lg text-foreground/70 mb-12 animate-fade-in-delay-1">
                            {t('resume_subtitle')}
                        </p>

                        <div className="space-y-12">
                            {/* HAKKIMDA KISMI */}
                            <section className="animate-fade-in-delay-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                                        {t('resume_about_title')}
                                    </h2>
                                </div>
                                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                                    <p className="text-foreground/80 leading-relaxed">
                                        {/* BURAYA HAKKINDA METNİNİ YAZACAKSIN */}
                                        {t('resume_about_text')}
                                    </p>
                                </div>
                            </section>

                            {/* TEKNOLOJİLER & YETENEKLER */}
                            <section className="animate-fade-in-delay-3">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Code2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                                        {t('resume_skills_title')}
                                    </h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Frontend */}
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                                            {t('resume_skills_frontend')}
                                        </h3>
                                        <ul className="space-y-2 text-foreground/80">
                                            {/* BURAYA FRONTEND TEKNOLOJİLERİNİ YAZACAKSIN */}
                                            <li>• React, Vue.js, Next.js</li>
                                            <li>• JavaScript, TypeScript</li>
                                            <li>• Tailwind CSS, SCSS</li>
                                            <li>• HTML5, CSS3</li>
                                        </ul>
                                    </div>

                                    {/* Backend */}
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                                            {t('resume_skills_backend')}
                                        </h3>
                                        <ul className="space-y-2 text-foreground/80">
                                            {/* BURAYA BACKEND TEKNOLOJİLERİNİ YAZACAKSIN */}
                                            <li>• Node.js, Express</li>
                                            <li>• Python, Django</li>
                                            <li>• PostgreSQL, MongoDB</li>
                                            <li>• REST APIs, GraphQL</li>
                                        </ul>
                                    </div>

                                    {/* Tools & Others */}
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                                            {t('resume_skills_tools')}
                                        </h3>
                                        <ul className="space-y-2 text-foreground/80">
                                            {/* BURAYA ARAÇLARI YAZACAKSIN */}
                                            <li>• Git, GitHub</li>
                                            <li>• Docker, CI/CD</li>
                                            <li>• VS Code, WebStorm</li>
                                            <li>• Figma, Adobe XD</li>
                                        </ul>
                                    </div>

                                    {/* Languages */}
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                                            {t('resume_skills_languages')}
                                        </h3>
                                        <ul className="space-y-2 text-foreground/80">
                                            {/* BURAYA DİLLERİ YAZACAKSIN */}
                                            <li>• Türkçe - Ana Dil</li>
                                            <li>• İngilizce - İleri Seviye</li>
                                            <li>• Almanca - Orta Seviye</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* EĞİTİM */}
                            <section className="animate-fade-in-delay-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                                        {t('resume_education_title')}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {/* EĞİTİM 1 - BURAYA KENDİ EĞİTİMİNİ YAZACAKSIN */}
                                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-heading font-semibold text-foreground">
                                                Bilgisayar Mühendisliği
                                            </h3>
                                            <span className="text-sm text-primary font-code">
                                                2019 - 2023
                                            </span>
                                        </div>
                                        <p className="text-foreground/70 mb-1">Üniversite Adı</p>
                                        <p className="text-sm text-foreground/60">GPA: 3.5/4.0</p>
                                    </div>

                                    {/* EĞİTİM 2 - İSTERSEN EKLE */}
                                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-heading font-semibold text-foreground">
                                                Lise Diploması
                                            </h3>
                                            <span className="text-sm text-primary font-code">
                                                2015 - 2019
                                            </span>
                                        </div>
                                        <p className="text-foreground/70">Lise Adı</p>
                                    </div>
                                </div>
                            </section>

                            {/* ÇALIŞMA DENEYİMİ */}
                            <section className="animate-fade-in-delay-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                                        {t('resume_experience_title')}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {/* İŞ DENEYİMİ 1 - BURAYA KENDİ DENEYİMİNİ YAZACAKSIN */}
                                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-xl font-heading font-semibold text-foreground">
                                                    Full Stack Developer
                                                </h3>
                                                <p className="text-foreground/70 mt-1">Şirket Adı</p>
                                            </div>
                                            <span className="text-sm text-primary font-code">
                                                2023 - Devam Ediyor
                                            </span>
                                        </div>
                                        <ul className="space-y-2 text-foreground/70 text-sm">
                                            <li>• Web uygulamaları geliştirme ve bakımı</li>
                                            <li>• RESTful API tasarımı ve implementasyonu</li>
                                            <li>• Modern frontend framework'leri ile UI geliştirme</li>
                                            <li>• Veritabanı tasarımı ve optimizasyonu</li>
                                        </ul>
                                    </div>

                                    {/* İŞ DENEYİMİ 2 - İSTERSEN EKLE */}
                                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-xl font-heading font-semibold text-foreground">
                                                    Frontend Developer Intern
                                                </h3>
                                                <p className="text-foreground/70 mt-1">Şirket Adı</p>
                                            </div>
                                            <span className="text-sm text-primary font-code">
                                                2022 - 2023
                                            </span>
                                        </div>
                                        <ul className="space-y-2 text-foreground/70 text-sm">
                                            <li>• React ile kullanıcı arayüzü geliştirme</li>
                                            <li>• Responsive tasarım implementasyonu</li>
                                            <li>• Takım içi code review süreçlerine katılım</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* SERTİFİKALAR (İSTERSEN) */}
                            <section className="animate-fade-in-delay-4">
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                                    {t('resume_certificates_title')}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* SERTİFİKA 1 - BURAYA KENDİ SERTİFİKALARINI YAZACAKSIN */}
                                    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                                        <h3 className="font-heading font-semibold text-foreground mb-2">
                                            React - The Complete Guide
                                        </h3>
                                        <p className="text-sm text-foreground/70">Udemy • 2023</p>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                                        <h3 className="font-heading font-semibold text-foreground mb-2">
                                            Node.js Advanced Concepts
                                        </h3>
                                        <p className="text-sm text-foreground/70">Udemy • 2023</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
