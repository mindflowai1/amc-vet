"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Microscope, Brain, Target, ArrowRight } from "lucide-react";

export function TargetAudienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            id="para-quem"
            ref={containerRef}
            className="relative py-32 bg-clinical-white overflow-hidden"
        >
            {/* Background Texture - Minimalist Logic */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(13,148,136,0.03),transparent_70%)]" />
                <motion.div
                    style={{ y: yMove }}
                    className="absolute top-20 right-20 w-64 h-64 border border-slate-100 rounded-full opacity-50"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
                    className="absolute bottom-20 left-20 w-48 h-48 border border-slate-100 rounded-full opacity-50"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-sm font-semibold tracking-[0.2em] text-medical-teal uppercase">
                            Para quem é este curso
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-12"
                    >
                        Para profissionais que valorizam{' '}
                        <span className="italic font-serif text-slate-400 font-normal">técnica</span>,{' '}
                        <span className="italic font-serif text-slate-400 font-normal">prática</span> e{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31]">
                            segurança
                        </span>.
                    </motion.h2>

                    {/* Divider Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                        className="w-24 h-[2px] bg-gradient-to-r from-medical-teal to-[#FE9E31] mx-auto mb-12"
                    />

                    {/* Description Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-20 font-light"
                    >
                        Este curso é direcionado a médicos veterinários que desejam aprofundar suas habilidades
                        cirúrgicas com foco em <strong className="font-semibold text-slate-900">microcirurgia aplicada</strong>, abdicando do básico para dominar a
                        <strong className="font-semibold text-slate-900"> tomada de decisão técnica</strong> e a <strong className="font-semibold text-slate-900">execução precisa</strong>.
                    </motion.p>

                    {/* Minimalist Feature Icons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        <FeatureItem
                            icon={Microscope}
                            label="Microcirurgia"
                            delay={0.4}
                            description="Domínio de magnificação"
                        />
                        <FeatureItem
                            icon={Brain}
                            label="Decisão Técnica"
                            delay={0.5}
                            description="Raciocínio clínico cirúrgico"
                        />
                        <FeatureItem
                            icon={Target}
                            label="Execução Precisa"
                            delay={0.6}
                            description="Técnica refinada"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon: Icon, label, delay, description }: { icon: any, label: string, delay: number, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center group cursor-default"
        >
            <div className="mb-6 relative">
                {/* Thin Circle */}
                <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-medical-teal transition-colors duration-500">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-medical-teal transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Animation: Small dot orbiting or static accent? Orbiting is nice but maybe too much. Static accent. */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FE9E31] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <h4 className="text-lg font-bold text-slate-900 mb-2">{label}</h4>
            <p className="text-sm text-slate-500 font-light">{description}</p>
        </motion.div>
    );
}
