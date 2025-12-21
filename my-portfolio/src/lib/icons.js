import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
    SiCplusplus, SiPython, SiPostgresql, SiMongodb, SiMysql, SiNodedotjs, SiExpress,
    SiGit, SiPostman, SiBlender, SiUnity, SiJsonwebtokens, SiNpm, SiJira, SiEslint,
    SiGithub, SiLinkedin, SiInstagram, SiFlutter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FiMail, FiPhone, FiUser, FiCalendar, FiBriefcase, FiMapPin, FiGlobe, FiDownload } from 'react-icons/fi';

export const skillIconMap = {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
    SiCplusplus, FaJava, SiPython, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiMysql,
    SiGit, VscVscode, SiPostman, SiJsonwebtokens, SiNpm, SiJira, SiEslint, SiBlender, SiUnity,
    SiFlutter
};

export const getSkillIcon = (iconName) => skillIconMap[iconName] || SiJavascript;

export const socialIcons = {
    github: SiGithub,
    linkedin: SiLinkedin,
    instagram: SiInstagram,
};

export const uiIcons = {
    mail: FiMail,
    phone: FiPhone,
    user: FiUser,
    calendar: FiCalendar,
    briefcase: FiBriefcase,
    mapPin: FiMapPin,
    globe: FiGlobe,
    download: FiDownload,
};

export {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
    SiCplusplus, SiPython, SiPostgresql, SiMongodb, SiMysql, SiNodedotjs, SiExpress,
    SiGit, SiPostman, SiBlender, SiUnity, SiJsonwebtokens, SiNpm, SiJira, SiEslint,
    SiFlutter,
    FaJava, VscVscode,

    SiGithub, SiLinkedin, SiInstagram,

    FiMail, FiPhone, FiUser, FiCalendar, FiBriefcase, FiMapPin, FiGlobe, FiDownload,
};
