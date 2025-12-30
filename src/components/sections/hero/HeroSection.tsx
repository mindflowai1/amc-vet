"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Award, Users, BookOpen, Star } from "lucide-react";

export function HeroSection() {
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const scaleInVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    // Fixed particle positions to avoid hydration mismatch
    const particlePositions = [
        { left: 15, top: 20 },
        { left: 85, top: 35 },
        { left: 25, top: 60 },
        { left: 70, top: 15 },
        { left: 45, top: 80 },
        { left: 60, top: 45 },
        { left: 10, top: 70 },
        { left: 90, top: 55 },
        { left: 35, top: 25 },
        { left: 55, top: 90 },
        { left: 20, top: 40 },
        { left: 75, top: 65 },
        { left: 40, top: 10 },
        { left: 65, top: 75 },
        { left: 30, top: 50 },
    ];

    return (
        <section className="relative min-h-screen flex items-start overflow-hidden bg-clinical-white pt-20 md:pt-28 lg:pt-36">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-medical-teal/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-surgical-orange/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Particles */}
                {particlePositions.map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-medical-teal/20 rounded-full"
                        style={{
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + (i % 3),
                            repeat: Infinity,
                            delay: (i % 5) * 0.4,
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#heroGrid)" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="space-y-8 lg:pr-8"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUpVariant} className="inline-flex">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surgical-orange/10 border border-surgical-orange/20 text-surgical-orange">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-semibold uppercase tracking-wider">Excelência Veterinária</span>
                            </div>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div variants={fadeUpVariant} className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                <span className="text-slate-900">Formação Avançada em</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-teal-600">
                                    Cirurgia Veterinária
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUpVariant}
                            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
                        >
                            Domine as técnicas cirúrgicas mais complexas com nossa metodologia exclusiva.
                            Teoria e prática alinhadas para elevar seu nível profissional.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div variants={fadeUpVariant} className="grid grid-cols-3 gap-6 py-6">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-medical-teal">
                                    <Users className="w-5 h-5" />
                                    <p className="text-3xl font-bold">500+</p>
                                </div>
                                <p className="text-sm text-slate-500 font-medium">Alunos Formados</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-medical-teal">
                                    <BookOpen className="w-5 h-5" />
                                    <p className="text-3xl font-bold">15+</p>
                                </div>
                                <p className="text-sm text-slate-500 font-medium">Cursos Ativos</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-medical-teal">
                                    <Award className="w-5 h-5" />
                                    <p className="text-3xl font-bold">98%</p>
                                </div>
                                <p className="text-sm text-slate-500 font-medium">Satisfação</p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/#diferenciais"
                                    className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-lg bg-medical-teal text-white hover:bg-[#FE9E31] transition-all duration-300 relative overflow-hidden group w-full sm:w-auto shadow-sm"
                                >
                                    <span className="relative z-10">Conhecer os cursos</span>
                                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FE9E31] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/#cadastro"
                                    className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-lg border border-slate-300 bg-transparent text-slate-700 hover:border-[#FE9E31] hover:text-[#FE9E31] hover:bg-slate-50 hover:shadow-lg hover:shadow-[#FE9E31]/20 transition-all duration-300 w-full sm:w-auto"
                                >
                                    Quero fazer parte
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Hero */}
                    <motion.div
                        variants={scaleInVariant}
                        initial="hidden"
                        animate="visible"
                        className="relative lg:h-[700px] h-[500px]"
                    >
                        {/* Main Image Container with Premium Effects */}
                        <div className="relative h-full">
                            {/* Decorative Glow Elements */}
                            <motion.div
                                className="absolute -top-12 -right-12 w-64 h-64 bg-medical-teal/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-12 -left-12 w-64 h-64 bg-surgical-orange/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.2, 0.5, 0.2],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />



                            {/* Main Photo Frame - Full Screen with Shadow */}
                            <div className="relative h-full rounded-3xl overflow-hidden">
                                {/* Doctor Photo with Drop Shadow */}
                                <div className="relative w-full h-full" style={{
                                    filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 30px rgba(13, 148, 136, 0.4))"
                                }}>
                                    <Image
                                        src="/doctor-guilherme.png"
                                        alt="Dr. Guilherme Savassi - Cirurgião Veterinário"
                                        fill
                                        className="object-cover object-top scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>

                                {/* Subtle Gradient Overlay for Depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-clinical-white/20 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Credential Badges with Enhanced Design */}
                            <motion.div
                                className="absolute top-12 -left-6 backdrop-blur-xl bg-white/95 rounded-2xl p-5 shadow-2xl border border-white/50"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    boxShadow: "0 20px 60px rgba(13, 148, 136, 0.2), 0 0 0 1px rgba(255,255,255,0.5)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-medical-teal to-teal-600 flex items-center justify-center shadow-lg">
                                        <Award className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Certificação</p>
                                        <p className="text-base font-bold text-slate-900">CRMV Ativo</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-12 -right-6 backdrop-blur-xl bg-white/95 rounded-2xl p-5 shadow-2xl border border-white/50"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    boxShadow: "0 20px 60px rgba(249, 115, 22, 0.2), 0 0 0 1px rgba(255,255,255,0.5)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-surgical-orange to-orange-600 flex items-center justify-center shadow-lg">
                                        <Star className="w-7 h-7 text-white fill-current" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Experiência</p>
                                        <p className="text-base font-bold text-slate-900">15+ Anos</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Small Accent Image - Surgical Procedure */}
                            <motion.div
                                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                style={{
                                    boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
                                }}
                            >
                                <Image
                                    src="/surgical-procedure.jpg"
                                    alt="Procedimento Cirúrgico"
                                    fill
                                    className="object-cover"
                                    sizes="300px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-medical-teal/70 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-lg">Técnica Avançada</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
                <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,64 C360,20 720,100 1440,64 L1440,120 L0,120 Z" fill="white" fillOpacity="0.5" />
                </svg>
            </div>
        </section>
    );
}
