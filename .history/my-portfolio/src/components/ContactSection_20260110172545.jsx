import {useState} from 'react';
import {useLanguage} from '../lib/utils';
import {FiMail,FiPhone,FiMapPin,FiSend,FiCheck,FiAlertCircle,FiUser,FiBookmark,SiReact,SiNodedotjs,SiUnity,SiJavascript} from '../lib/icons';
import emailjs from '@emailjs/browser';
import profileData from '../data/profile.json';

function ContactSection() {
    const {translate} = useLanguage();
    const [name,setName] = useState('');
    const [subject,setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [status,setStatus] = useState('idle');

    const techSkills = [
        {Icon: SiReact, name: "React"},
        {Icon: SiNodedotjs, name: "Node.js"},
        {Icon: SiJavascript, name: "JavaScript"},
        {Icon: SiUnity, name: "Unity"},
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('loading');
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    from_subject: subject,
                    from_message: message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setName('');
            setSubject('');
            setEmail('');
            setMessage('');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center pt-32 pb-8">

            {/* CARD */}
            <div className="flex items-center justify-center w-full max-w-6xl">
                <div className="relative w-full bg-card/10 backdrop-blur-sm rounded-2xl border-l-4 border-primary shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]">
                    <div className="grid md:grid-cols-2">

                        {/* LEFT SIDE - CONTACT INFORMATION */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">

                            {/* TITLE */}
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 tracking-tight">
                                {translate('hireme.title')}
                            </h2>

                            <p className="text-foreground/60 mb-8 leading-relaxed">
                                {translate('hireme.description')}
                            </p>

                            {/* CONTENT */}
                            <div className="space-y-4 mb-8">
                                <a
                                    href={`mailto:${profileData.email}`}
                                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <FiMail className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>{profileData.email}</span>
                                </a>
                                <a
                                    href={`tel:${profileData.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <FiPhone className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>{profileData.phone}</span>
                                </a>
                                <div className="flex items-center gap-4 text-foreground/80">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <FiMapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>{profileData.location}</span>
                                </div>
                            </div>

                            {/* SKILLS */}
                            <div>
                                <span className="text-sm text-foreground/50 uppercase tracking-wider mb-3 block">
                                    {translate('hireme.skills_label')}
                                </span>
                                <div className="flex justify-center gap-3">
                                    {techSkills.map((skill,index) => (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg bg-primary/10"
                                            title={skill.name}
                                        >
                                            <skill.Icon className="w-5 h-5 text-primary" />
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        {/* RIGHT SIDE - CONTACT FORM */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                                {translate('hireme.subtitle')}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* NAME FIELD */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiUser className="text-primary" />
                                        {translate('hireme.name_label') || 'Ad Soyad'}
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder={translate('hireme.name_placeholder') || 'Adınız Soyadınız'}
                                    />
                                </div>

                                {/* EMAIL FIELD */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiMail className="text-primary" />
                                        {translate('hireme.email_label')}
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder={translate('hireme.email_placeholder')}
                                    />
                                </div>

                                {/* SUBJECT FIELD */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiBookmark className="text-primary" />
                                        {translate('hireme.subject_label')}
                                    </label>
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(event) => setSubject(event.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder={translate('hireme.subject_placeholder')}
                                    />
                                </div>

                                {/* MESSAGE FIELD */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiBookmark className="text-primary" />
                                        {translate('hireme.message')}
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 backdrop-blur-sm border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                        placeholder={translate('hireme.message_placeholder')}
                                    />
                                </div>

                                {/* SUBMIT BUTTON */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${status === 'success'
                                        ? 'bg-primary text-white'
                                        : status === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/30'
                                    } ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 opacity-50 animate-pulse-subtle" />
            </div>
        </div>
    );
}

export default ContactSection;