"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const flags = [
    { code: 'pt', src: 'https://flagcdn.com/br.svg', alt: 'Português' },
    { code: 'en', src: 'https://flagcdn.com/gb.svg', alt: 'English' },
    { code: 'es', src: 'https://flagcdn.com/es.svg', alt: 'Español' },
] as const;

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const currentFlag = flags.find(f => f.code === language) || flags[0];
    const otherFlags = flags.filter(f => f.code !== language);

    const navLinks = [
        { name: t.nav.inicio, href: "/" },
        { name: t.nav.diferenciais, href: "/#diferenciais" },
        { name: t.nav.para_quem, href: "/#para-quem" },
        { name: t.nav.estrutura, href: "/#formato" },
        { name: t.nav.investimento, href: "/#investimento" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Framer Motion Variants
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-white border-b border-slate-200 shadow-sm py-4"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 z-50">
                        <img
                            src="/logo.png"
                            alt="AMC Vet Logo"
                            className="w-14 h-14 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-slate-900 tracking-tight leading-none">AMCVET</span>
                            <span className="text-xs text-slate-600 font-medium tracking-wide">{t.nav.subtitle}</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-slate-600 hover:text-[#FE9E31] transition-all duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FE9E31] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}

                        {/* Language Selector Dropdown */}
                        <div className="relative pl-4 border-l border-slate-200">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <img src={currentFlag.src} alt={currentFlag.alt} className="w-6 h-6 rounded-full object-cover shadow-sm" />
                                <ChevronDown size={14} className={cn("text-slate-500 transition-transform duration-300", isLangOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-w-[140px]"
                                    >
                                        <div className="py-1">
                                            {otherFlags.map((flag) => (
                                                <button
                                                    key={flag.code}
                                                    onClick={() => {
                                                        setLanguage(flag.code as any);
                                                        setIsLangOpen(false);
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors w-full text-left"
                                                >
                                                    <img src={flag.src} alt={flag.alt} className="w-5 h-5 rounded-full object-cover shadow-sm" />
                                                    <span className="text-sm text-slate-600 font-medium">{flag.alt}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/#cadastro"
                            className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-clinical-white border border-slate-200 bg-transparent text-slate-600 h-9 px-4 text-sm hover:border-[#FE9E31] hover:text-[#FE9E31] hover:bg-slate-50 transition-all duration-300"
                        >
                            {t.nav.inscreva_se}
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle & Languages */}
                    <div className="flex items-center gap-4 md:hidden z-50">
                        {/* Mobile Language Cycle Button */}
                        <button
                            onClick={() => {
                                const nextLang = language === 'pt' ? 'en' : language === 'en' ? 'es' : 'pt';
                                setLanguage(nextLang);
                            }}
                            className="flex items-center gap-1.5 p-1 px-2 rounded-full bg-slate-50 border border-slate-200 active:scale-95 transition-transform"
                        >
                            <img src={currentFlag.src} alt={currentFlag.alt} className="w-5 h-5 rounded-full object-cover" />
                            <span className="text-xs font-bold text-slate-600 uppercase">{currentFlag.code}</span>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 hover:text-medical-teal transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="absolute top-full left-0 w-full bg-clinical-white border-b border-slate-200 overflow-hidden shadow-lg md:hidden"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <motion.div key={link.name} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between text-lg font-medium text-slate-700 py-2 border-b border-slate-100 hover:text-[#FE9E31] transition-colors duration-300"
                                        >
                                            {link.name}
                                            <ChevronRight size={16} className="opacity-50" />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div variants={itemVariants} className="pt-4">
                                    <Link
                                        href="/#cadastro"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center justify-between w-full h-11 px-6 rounded-lg font-medium bg-medical-teal text-white hover:bg-teal-700 transition-colors shadow-sm"
                                    >
                                        {t.nav.inscreva_se}
                                        <ChevronRight size={16} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
