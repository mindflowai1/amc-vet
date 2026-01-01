"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

type Translations = {
    [key in Language]: {
        nav: {
            inicio: string;
            diferenciais: string;
            para_quem: string;
            estrutura: string;
            investimento: string;
            inscreva_se: string;
            subtitle: string;
        };
        hero: {
            badge: string;
            title_prefix: string;
            title_suffix: string;
            subtitle: string;
            stats: {
                students: string;
                courses: string;
                satisfaction: string;
            };
            cta_primary: string;
            cta_secondary: string;
            badges: {
                certification: string;
                crmv: string;
                experience: string;
                years: string;
            };
        };
    };
};

const translations: Translations = {
    pt: {
        nav: {
            inicio: "Início",
            diferenciais: "Diferenciais",
            para_quem: "Para Quem",
            estrutura: "Estrutura",
            investimento: "Investimento",
            inscreva_se: "Inscreva-se",
            subtitle: "Academia Mineira de Cirurgia Veterinária",
        },
        hero: {
            badge: "Excelência Veterinária",
            title_prefix: "Formação Avançada em",
            title_suffix: "Cirurgia Veterinária",
            subtitle: "Domine as técnicas cirúrgicas mais complexas com nossa metodologia exclusiva. Teoria e prática alinhadas para elevar seu nível profissional.",
            stats: {
                students: "Alunos Formados",
                courses: "Cursos Ativos",
                satisfaction: "Satisfação",
            },
            cta_primary: "Conhecer os cursos",
            cta_secondary: "Quero fazer parte",
            badges: {
                certification: "Certificação",
                crmv: "CRMV Ativo",
                experience: "Experiência",
                years: "15+ Anos",
            },
        },
    },
    en: {
        nav: {
            inicio: "Home",
            diferenciais: "Differentials",
            para_quem: "For Whom",
            estrutura: "Structure",
            investimento: "Investment",
            inscreva_se: "Sign Up",
            subtitle: "Minas Gerais Academy of Veterinary Surgery",
        },
        hero: {
            badge: "Veterinary Excellence",
            title_prefix: "Advanced Training in",
            title_suffix: "Veterinary Surgery",
            subtitle: "Master the most complex surgical techniques with our exclusive methodology. Theory and practice aligned to elevate your professional level.",
            stats: {
                students: "Graduated Students",
                courses: "Active Courses",
                satisfaction: "Satisfaction",
            },
            cta_primary: "Explore Courses",
            cta_secondary: "Join Now",
            badges: {
                certification: "Certification",
                crmv: "Active VMRC", // Veterinary Medicine Regional Council
                experience: "Experience",
                years: "15+ Years",
            },
        },
    },
    es: {
        nav: {
            inicio: "Inicio",
            diferenciais: "Diferenciales",
            para_quem: "Para Quién",
            estrutura: "Estructura",
            investimento: "Inversión",
            inscreva_se: "Inscribirse",
            subtitle: "Academia Minera de Cirugía Veterinaria",
        },
        hero: {
            badge: "Excelencia Veterinaria",
            title_prefix: "Formación Avanzada en",
            title_suffix: "Cirugía Veterinaria",
            subtitle: "Domine las técnicas quirúrgicas más complejas con nuestra metodología exclusiva. Teoría y práctica alineadas para elevar su nivel profesional.",
            stats: {
                students: "Alumnos Graduados",
                courses: "Cursos Activos",
                satisfaction: "Satisfacción",
            },
            cta_primary: "Conocer los Cursos",
            cta_secondary: "Quiero Participar",
            badges: {
                certification: "Certificación",
                crmv: "CRMV Activo",
                experience: "Experiencia",
                years: "15+ Años",
            },
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations['pt'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
