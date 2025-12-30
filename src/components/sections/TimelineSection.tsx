"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Microscope, Brain, Target, Award, Users, TrendingUp } from "lucide-react";

export function TimelineSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-32 bg-gradient-to-b from-clinical-white via-slate-50 to-clinical-white overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="bentoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="1" fill="currentColor" className="text-slate-900" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#bentoGrid)" />
                    </svg>
                </div>

                {/* Glow Orbs */}
                <motion.div
                    className="absolute -top-24 -left-24 w-96 h-96 bg-medical-teal/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FE9E31]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-slate-900">Para profissionais que valorizam </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31]">
                            técnica, prática e segurança
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Este curso é direcionado a médicos veterinários que desejam aprofundar suas habilidades
                        cirúrgicas com foco em microcirurgia aplicada, tomada de decisão técnica e execução precisa.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto"
                >
                    {/* Large Card - Main Message */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-4 md:row-span-2 group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full bg-gradient-to-br from-medical-teal to-teal-600 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#FE9E31]/20 rounded-full blur-2xl" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6">
                                        <Award className="w-4 h-4" />
                                        <span className="text-sm font-semibold">Formação Premium</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        Transforme sua prática cirúrgica com metodologia comprovada
                                    </h3>

                                    <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                                        Aprenda técnicas avançadas que combinam precisão cirúrgica, tomada de decisão estratégica
                                        e execução impecável para resultados excepcionais.
                                    </p>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-6 mt-8">
                                    <div>
                                        <p className="text-4xl font-bold text-white">500+</p>
                                        <p className="text-white/80 text-sm">Veterinários Formados</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white">98%</p>
                                        <p className="text-white/80 text-sm">Taxa de Satisfação</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white">15+</p>
                                        <p className="text-white/80 text-sm">Anos de Experiência</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>

                    {/* Microcirurgia Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-slate-100 overflow-hidden min-h-[280px]">
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-teal to-[#FE9E31] p-0.5 shadow-lg">
                                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                        <Microscope className="w-7 h-7 text-medical-teal" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Microcirurgia Aplicada
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Técnicas avançadas com foco em precisão e resultados excepcionais em procedimentos complexos.
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-medical-teal/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Hover Shadow */}
                            <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-medical-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>
                    </motion.div>

                    {/* Tomada de Decisão Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-slate-100 overflow-hidden min-h-[280px]">
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-teal to-[#FE9E31] p-0.5 shadow-lg">
                                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                        <Brain className="w-7 h-7 text-medical-teal" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Tomada de Decisão Técnica
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Desenvolva raciocínio clínico apurado para escolher a melhor abordagem em cada situação.
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FE9E31]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Hover Shadow */}
                            <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-[#FE9E31]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>
                    </motion.div>

                    {/* Small Stat Card 1 */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 shadow-md border border-slate-200 overflow-hidden min-h-[160px] flex flex-col justify-center items-center text-center">
                            <Users className="w-8 h-8 text-medical-teal mb-3" />
                            <p className="text-3xl font-bold text-slate-900">500+</p>
                            <p className="text-xs text-slate-600 mt-1">Alunos Ativos</p>

                            {/* Pulse effect */}
                            <motion.div
                                className="absolute inset-0 bg-medical-teal/5 rounded-2xl"
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* Small Stat Card 2 */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 shadow-md border border-slate-200 overflow-hidden min-h-[160px] flex flex-col justify-center items-center text-center">
                            <TrendingUp className="w-8 h-8 text-[#FE9E31] mb-3" />
                            <p className="text-3xl font-bold text-slate-900">98%</p>
                            <p className="text-xs text-slate-600 mt-1">Satisfação</p>

                            {/* Pulse effect */}
                            <motion.div
                                className="absolute inset-0 bg-[#FE9E31]/5 rounded-2xl"
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* Execução Precisa Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-3 group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-slate-100 overflow-hidden min-h-[200px]">
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-teal to-[#FE9E31] p-0.5 shadow-lg">
                                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                        <Target className="w-7 h-7 text-medical-teal" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Execução Precisa
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Domine a execução técnica com segurança, reduzindo riscos e maximizando os resultados cirúrgicos
                                através de práticas comprovadas e metodologia estruturada.
                            </p>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-medical-teal/5 to-transparent rounded-tl-full" />

                            {/* Hover Shadow */}
                            <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-medical-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
