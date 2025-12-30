"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Clock, Zap, ArrowUpRight } from "lucide-react";

const items = [
    {
        id: "presencial",
        label: "01. Modelo",
        title: "Totalmente Presencial",
        description: "Vivência real em centro cirúrgico. Nada substitui a sensação tátil e a pressão do momento cirúrgico real.",
        icon: MapPin
    },
    {
        id: "turma",
        label: "02. Exclusividade",
        title: "Turma Reduzida",
        description: "Grupos seletos garantem que cada aluno receba mentoria individualizada e feedback detalhado em tempo real.",
        icon: Users
    },
    {
        id: "carga",
        label: "03. Intensidade",
        title: "Carga Horária Intensiva",
        description: "Dias de imersão profunda, desenhados para máxima absorção de conteúdo sem perda de tempo.",
        icon: Clock
    },
    {
        id: "pratica",
        label: "04. Metodologia",
        title: "Foco Prático",
        description: "Teoria objetiva e prática exaustiva. Você sai do curso pronto para aplicar as técnicas no dia seguinte.",
        icon: Zap
    }
];

export function FormatoCursoSection() {
    // Default to first item active for mobile engagement or visual cue, or none.
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section id="formato" className="py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -skew-x-12 translate-x-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Sticky Title */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <span className="text-medical-teal font-semibold tracking-widest text-sm uppercase">
                                    Estrutura
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 leading-tight">
                                    Formato <br />
                                    do Curso
                                </h2>
                                <p className="mt-6 text-slate-500 text-lg font-light leading-relaxed max-w-sm">
                                    Uma estrutura pensada para quem não tem tempo a perder e busca resultados imediatos.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: The List */}
                    <div className="lg:w-2/3 flex flex-col">
                        {items.map((item) => (
                            <ListItem
                                key={item.id}
                                item={item}
                                isActive={activeId === item.id}
                                onHover={() => setActiveId(item.id)}
                                onLeave={() => setActiveId(null)}
                            />
                        ))}
                        {/* Final Border */}
                        <div className="w-full h-px bg-slate-200" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ListItem({ item, isActive, onHover, onLeave }: any) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            className="group relative border-t border-slate-200 cursor-default"
        >
            <motion.div
                className="py-8 md:py-10 flex flex-col md:flex-row md:items-start justify-between relative z-10"
                animate={{ paddingBottom: isActive ? "1rem" : "2.5rem" }} // Subtle shift
            >
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full">
                    {/* Label/Number */}
                    <span className={`text-sm font-mono transition-colors duration-300 w-32 uppercase tracking-wider ${isActive ? "text-medical-teal" : "text-slate-400 group-hover:text-slate-600"}`}>
                        {item.label}
                    </span>

                    <div className="flex-1">
                        {/* Title */}
                        <h3 className={`text-2xl md:text-4xl font-manrope font-medium transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"}`}>
                            {item.title}
                        </h3>

                        {/* Description Reveal */}
                        <motion.div
                            initial={false}
                            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 16 : 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                        >
                            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                                {item.description}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Arrow Icon */}
                <motion.div
                    animate={{ rotate: isActive ? 45 : 0, opacity: isActive ? 1 : 0.2 }}
                    className="absolute right-0 top-10 md:top-12 text-slate-900 hidden md:block"
                >
                    <ArrowUpRight className="w-8 h-8" />
                </motion.div>
            </motion.div>

            {/* Background Highlight on Hover */}
            <motion.div
                className="absolute inset-0 bg-slate-50 -z-10 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
            />
        </motion.div>
    )
}
