import { useState } from "react";
import { useLanguage } from "../lib/utils";
import { FiUser, FiMail, FiMessageSquare, FiBookmark, FiPhone, FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export const ContactCard = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "backend",
        message: ""
    });

    const subjects = [
        { value: "backend", label: "Backend Development" },
        { value: "frontend", label: "Frontend Development" },
        { value: "web-design", label: "Web Design / UI UX" },
        { value: "mobile-app", label: "Desktop/Mobile App" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const subject = subjects.find(s => s.value === formData.subject)?.label || formData.subject;
        const mailtoLink = `mailto:jusiann0@gmail.com?subject=${encodeURIComponent(subject + " - " + formData.firstName + " " + formData.lastName)}&body=${encodeURIComponent(formData.message)}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center pt-32 pb-8">
            
            <div className="flex items-center justify-center w-full max-w-4xl">
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
                        p-8
                        md:p-12
                        transition-all 
                        duration-500
                        hover:scale-[1.01]
                    "
                >
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h2 className="
                                text-3xl 
                                md:text-4xl 
                                font-heading 
                                font-bold 
                                text-foreground
                                mb-3
                                tracking-tight
                            ">
                                {t('contact_title')}
                            </h2>
                            <p className="
                                text-base 
                                md:text-lg 
                                text-foreground/60
                            ">
                                {t('contact_subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiUser className="text-primary" />
                                        {t('contact_first_name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
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
                                        placeholder={t('contact_first_name_placeholder')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiUser className="text-primary" />
                                        {t('contact_last_name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
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
                                        placeholder={t('contact_last_name_placeholder')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <FiBookmark className="text-primary" />
                                    {t('contact_subject')}
                                </label>
                                <div className="relative">
                                    <input
                                        type="range"
                                        name="subject"
                                        min="0"
                                        max="3"
                                        step="1"
                                        value={subjects.findIndex(s => s.value === formData.subject)}
                                        onChange={(e) => setFormData(prev => ({ 
                                            ...prev, 
                                            subject: subjects[parseInt(e.target.value)].value 
                                        }))}
                                        className="
                                            w-full
                                            h-2
                                            rounded-lg
                                            appearance-none
                                            cursor-pointer
                                            bg-foreground/10
                                            [&::-webkit-slider-thumb]:appearance-none
                                            [&::-webkit-slider-thumb]:w-5
                                            [&::-webkit-slider-thumb]:h-5
                                            [&::-webkit-slider-thumb]:rounded-full
                                            [&::-webkit-slider-thumb]:bg-primary
                                            [&::-webkit-slider-thumb]:cursor-pointer
                                            [&::-webkit-slider-thumb]:transition-all
                                            [&::-webkit-slider-thumb]:hover:scale-110
                                            [&::-moz-range-thumb]:w-5
                                            [&::-moz-range-thumb]:h-5
                                            [&::-moz-range-thumb]:rounded-full
                                            [&::-moz-range-thumb]:bg-primary
                                            [&::-moz-range-thumb]:border-0
                                            [&::-moz-range-thumb]:cursor-pointer
                                        "
                                    />
                                    <div className="flex justify-between mt-3 text-xs text-foreground/60">
                                        {subjects.map((subj) => (
                                            <span 
                                                key={subj.value}
                                                className={`
                                                    transition-all
                                                    ${formData.subject === subj.value ? 'text-primary font-semibold scale-110' : ''}
                                                `}
                                            >
                                                {subj.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <FiMessageSquare className="text-primary" />
                                    {t('contact_message')}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
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
                                    placeholder={t('contact_message_placeholder')}
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    w-full
                                    px-8
                                    py-4
                                    rounded-lg
                                    bg-primary
                                    text-white
                                    font-semibold
                                    text-lg
                                    hover:bg-primary/90
                                    focus:outline-none
                                    focus:ring-4
                                    focus:ring-primary/30
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                    active:scale-95
                                    shadow-lg
                                    shadow-primary/30
                                "
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <FiMail />
                                    {t('contact_submit')}
                                </span>
                            </button>
                        </form>
                    </div>

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
        </div>
    );
};
