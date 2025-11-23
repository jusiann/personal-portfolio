import {useState} from 'react';
import {useLanguage} from '../lib/utils';
import {FiUser, FiMail, FiMessageSquare, FiBookmark} from 'react-icons/fi';

export const ContactCard = () => {
    const {translate} = useLanguage();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "backend",
        message: ""
    });

    const subjects = [
        {value: "backend", label: "Backend Development"},
        {value: "frontend", label: "Frontend Development"},
        {value: "web-design", label: "Web Design / UI UX"},
        {value: "mobile-app", label: "Desktop/Mobile App"}
    ];

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(previous => ({...previous, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const subject = subjects.find(s => s.value === formData.subject)?.label || formData.subject;
        const mailToLink = `mailto:adilefe257@gmail.com?subject=${encodeURIComponent("Contact from " + formData.firstName + " " + formData.lastName + " - " + subject)}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailToLink;
    };

    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center pt-32 pb-8">

            {/* CONTACT CARD */}
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
                                {translate('contact_title')}
                            </h2>
                            <p className="
                                text-base 
                                md:text-lg 
                                text-foreground/60
                            ">
                                {translate('contact_subtitle')}
                            </p>
                        </div>

                        {/* CONTACT FORM */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* FIRST NAME */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiUser className="text-primary" />
                                        {translate('contact_first_name')}
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
                                        placeholder={translate('contact_first_name_placeholder')}
                                    />
                                </div>

                                {/* LAST NAME */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                        <FiUser className="text-primary" />
                                        {translate('contact_last_name')}
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
                                        placeholder={translate('contact_last_name_placeholder')}
                                    />
                                </div>
                            </div>

                            {/* SUBJECT */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <FiBookmark className="text-primary" />
                                    {translate('contact_subject')}
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgb(185, 28, 28)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                        backgroundSize: '1.5em 1.5em',
                                        paddingRight: '3rem'
                                    }}
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
                                        focus:outline-none
                                        focus:border-primary
                                        focus:ring-2
                                        focus:ring-primary/20
                                        transition-all
                                        cursor-pointer
                                        appearance-none
                                    "
                                >
                                    {
                                        subjects.map((subject) => (
                                            <option key={subject.value} value={subject.value}>
                                                {subject.label}
                                            </option>
                                    ))}
                                </select>
                            </div>

                            {/* MESSAGE */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <FiMessageSquare className="text-primary" />
                                    {translate('contact_message')}
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
                                    placeholder={translate('contact_message_placeholder')}
                                />
                            </div>


                            {/* SUBMIT BUTTON */}
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
                                    {translate('contact_submit')}
                                </span>
                            </button>
                        </form>
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
