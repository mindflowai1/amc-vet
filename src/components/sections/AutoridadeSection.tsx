"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, ChevronDown } from "lucide-react";

export function AutoridadeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section
            id="coordenacao"
            ref={containerRef}
            className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden min-h-screen flex items-center"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* --- Image Column --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            style={{ y: yParallax }}
                            className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl"
                        >
                            <Image
                                src="/doctor-guilherme-v2.png"
                                alt="Dr. Guilherme Lages Savassi Rocha"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                        </motion.div>

                        {/* Floating Accent */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-medical-teal text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block"
                        >
                            <p className="text-3xl font-bold">25+</p>
                            <p className="text-sm opacity-90">Anos de Experiência</p>
                        </motion.div>
                    </motion.div>

                    {/* --- Content Column --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <p className="text-medical-teal font-semibold tracking-wider text-sm uppercase mb-3">
                                Coordenação Técnica
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                Dr. Guilherme Lages Savassi Rocha
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Especialista Diplomado CBCAV | PhD em Cirurgia pela UFMG | Professor Internacional
                            </p>
                        </div>

                        {/* Quick Credentials */}
                        <div className="grid grid-cols-3 gap-3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-3 rounded-lg bg-white border border-slate-200 shadow-sm"
                            >
                                <GraduationCap className="w-6 h-6 text-medical-teal mb-2" />
                                <p className="text-xs text-slate-500 text-center">PhD UFMG</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-3 rounded-lg bg-white border border-slate-200 shadow-sm"
                            >
                                <Award className="w-6 h-6 text-surgical-orange mb-2" />
                                <p className="text-xs text-slate-500 text-center">CBCAV</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-3 rounded-lg bg-white border border-slate-200 shadow-sm"
                            >
                                <BookOpen className="w-6 h-6 text-medical-teal mb-2" />
                                <p className="text-xs text-slate-500 text-center">Autor</p>
                            </motion.div>
                        </div>

                        {/* Summary Text */}
                        <p className="text-slate-600 leading-relaxed">
                            Cirurgião com formação pela Faculdade de Medicina da UFMG e certificação pelo Colégio Brasileiro de Cirurgia e Anestesiologia Veterinária. Experiência em docência internacional e procedimentos de alta complexidade.
                        </p>

                        {/* Expandable Details */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-sm font-semibold text-slate-700">
                                    {isExpanded ? "Ocultar" : "Ver"} trajetória acadêmica completa
                                </span>
                                <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-medical-teal" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4 space-y-3 border-t border-slate-100 pt-4">
                                            <TimelineItem year="1999" title="Graduação e Residência em Cirurgia" institution="UFMG" />
                                            <TimelineItem year="2003" title="Mestrado em Cirurgia Experimental" institution="UFSM" />
                                            <TimelineItem year="2012" title="Doutorado em Cirurgia" institution="Faculdade de Medicina UFMG" />
                                            <TimelineItem year="Atual" title="Especialista Diplomado CBCAV" institution="Certificado Ativo" />

                                            <div className="mt-4 pt-4 border-t border-slate-100">
                                                <p className="text-xs text-slate-500 leading-relaxed">
                                                    <strong className="text-slate-700">Sobre o CBCAV:</strong> Certificação que exige experiência comprovada, aprovação em exames práticos e teóricos, e reavaliação a cada 5 anos.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function TimelineItem({ year, title, institution }: { year: string; title: string; institution: string }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-16 pt-1">
                <span className="inline-block px-2 py-1 rounded bg-medical-teal/10 text-medical-teal text-xs font-semibold">
                    {year}
                </span>
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{title}</p>
                <p className="text-xs text-slate-500">{institution}</p>
            </div>
        </div>
    );
}
