import { useState } from 'react';
import { useLanguage } from '../lib/utils';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiUser } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiUnity, SiJavascript } from 'react-icons/si';
// import emailjs from '@emailjs/browser';

// EmailJS Credentials
const EMAILJS_SERVICE_ID = 'service_4tkmm6c';
const EMAILJS_TEMPLATE_ID = 'template_ugb57q9';
const EMAILJS_PUBLIC_KEY = 'nIPGEoAjQwSBWiens';

export const ContactCard = () => {
    const { translate } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const techSkills = [
        { Icon: SiReact, name: "React" },
        { Icon: SiNodedotjs, name: "Node.js" },
        { Icon: SiJavascript, name: "JavaScript" },
        { Icon: SiUnity, name: "Unity" },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('loading');

        try {
            // EmailJS ile mail gönder
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    from_message: message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');

            // 3 saniye sonra durumu sıfırla
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center pt-32 pb-8">

            {/* HIRE ME CARD - Sağlı Sollu Eşit Düzen */}
            <div className="flex items-center justify-center w-full max-w-6xl">
                <div
                    className="
                        relative 
                        w-full
                        bg-card/10 
                        backdrop-blur-sm
                        rounded-2xl 
                        border-l-4 
                        border-primary
                        shadow-2xl
                        overflow-hidden
                        transition-all 
                        duration-500
                        hover:scale-[1.01]
                    "
                >
                    <div className="grid md:grid-cols-2">

                        {/* SOL TARAF - İletişim Bilgileri */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            {/* Başlık */}
                            <h2 className="
                                text-3xl 
                                md:text-4xl 
                                font-heading 
                                font-bold 
                                text-foreground
                                mb-4
                                tracking-tight
                            ">
                                {translate('hireme.title')}
                            </h2>
                            <p className="text-foreground/60 mb-8 leading-relaxed">
                                {translate('hireme.description')}
                            </p>

                            {/* İletişim Bilgileri */}
                            <div className="space-y-4 mb-8">
                                <a
                                    href="mailto:adilefe257@gmail.com"
                                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <FiMail className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>adilefe257@gmail.com</span>
                                </a>

                                <a
                                    href="tel:+905456764324"
                                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <FiPhone className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>+90 545 676 43 24</span>
                                </a>

                                <div className="flex items-center gap-4 text-foreground/80">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <FiMapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>{translate('resume.location')}</span>
                                </div>
                            </div>

                            {/* Uzmanlık Alanları */}
                            <div>
                                <span className="text-sm text-foreground/50 uppercase tracking-wider mb-3 block">
                                    {translate('hireme.skills_label')}
                                </span>
                                <div className="flex gap-3">
                                    {techSkills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="p-2 rounded-lg bg-primary/10 text-foreground/70 hover:text-primary hover:bg-primary/20 transition-all"
                                            title={skill.name}
                                        >
                                            <skill.Icon className="w-6 h-6" />
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        {/* SAĞ TARAF - İletişim Formu */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                                {translate('hireme.subtitle')}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* AD SOYAD */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiUser className="text-primary" />
                                        {translate('hireme.name_label') || 'Ad Soyad'}
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            rounded-lg
                                            bg-background/50
                                            backdrop-blur-sm
                                            border
                                            border-foreground/10
                                            text-foreground
                                            placeholder:text-foreground/40
                                            focus:outline-none
                                            focus:border-primary
                                            focus:ring-2
                                            focus:ring-primary/20
                                            transition-all
                                        "
                                        placeholder={translate('hireme.name_placeholder') || 'Adınız Soyadınız'}
                                    />
                                </div>

                                {/* E-POSTA */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiMail className="text-primary" />
                                        {translate('hireme.email_label')}
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            rounded-lg
                                            bg-background/50
                                            backdrop-blur-sm
                                            border
                                            border-foreground/10
                                            text-foreground
                                            placeholder:text-foreground/40
                                            focus:outline-none
                                            focus:border-primary
                                            focus:ring-2
                                            focus:ring-primary/20
                                            transition-all
                                        "
                                        placeholder="ornek@email.com"
                                    />
                                </div>

                                {/* MESAJ */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiSend className="text-primary" />
                                        {translate('hireme.message')}
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows="5"
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            rounded-lg
                                            bg-background/50
                                            backdrop-blur-sm
                                            border
                                            border-foreground/10
                                            text-foreground
                                            placeholder:text-foreground/40
                                            focus:outline-none
                                            focus:border-primary
                                            focus:ring-2
                                            focus:ring-primary/20
                                            transition-all
                                            resize-none
                                        "
                                        placeholder={translate('hireme.message_placeholder')}
                                    />
                                </div>

                                {/* GÖNDER BUTONU */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`
                                        w-full
                                        px-6
                                        py-4
                                        rounded-lg
                                        font-semibold
                                        text-lg
                                        transition-all
                                        duration-300
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        ${status === 'success'
                                            ? 'bg-primary text-white'
                                            : status === 'error'
                                                ? 'bg-red-500 text-white'
                                                : 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/30'
                                        }
                                        ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                                    `}
                                >
                                    {status === 'loading' && (
                                        <>
                                            {translate('hireme.sending')}
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            {translate('hireme.sent')}
                                            <FiCheck className="w-5 h-5" />
                                        </>
                                    )}
                                    {status === 'error' && (
                                        <>
                                            {translate('hireme.error')}
                                            <FiAlertCircle className="w-5 h-5" />
                                        </>
                                    )}
                                    {status === 'idle' && (
                                        <>
                                            {translate('hireme.submit')}
                                            <FiSend className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* GLOW EFFECT FOR CARD */}
                <div
                    className="
                        absolute 
                        -inset-4 
                        bg-primary/5 
                        blur-3xl 
                        -z-10 
                        opacity-50
                        animate-pulse-subtle
                    "
                />
            </div>
        </div>
    );
};
