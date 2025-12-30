"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Início", href: "/" },
    { name: "Diferenciais", href: "/#diferenciais" },
    { name: "Para Quem", href: "/#para-quem" },
    { name: "Estrutura", href: "/#formato" },
    { name: "Investimento", href: "/#investimento" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                            <span className="text-xs text-slate-600 font-medium tracking-wide">Academia Mineira de Cirurgia Veterinária</span>
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
                        <Link
                            href="/#cadastro"
                            className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-clinical-white border border-slate-200 bg-transparent text-slate-600 h-9 px-4 text-sm hover:border-[#FE9E31] hover:text-[#FE9E31] hover:bg-slate-50 transition-all duration-300"
                        >
                            Inscreva-se
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 p-2 text-slate-600 hover:text-medical-teal transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
                                        Inscreva-se
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
