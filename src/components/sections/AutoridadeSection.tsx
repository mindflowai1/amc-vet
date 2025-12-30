"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function AutoridadeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            id="coordenacao"
            ref={containerRef}
            className="py-12 md:py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* --- Image Compositing (Asymmetrical) --- */}
                    <div className="w-full lg:w-5/12 relative">
                        {/* Decorative Background Box */}
                        <div className="absolute top-10 -left-10 w-full h-full border-[1px] border-medical-teal/30 rounded-none z-0 hidden md:block" />

                        {/* Simple elegant gray block behind */}
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-slate-100 -z-10" />

                        <motion.div
                            style={{ y: yParallax }}
                            className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-slate-200 shadow-2xl"
                        >
                            {/* Grayscale to Color Reveal on Scroll/Hover could be nice, or just clean color */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/doctor-guilherme-v2.png"
                                    alt="Dr. Guilherme Savassi"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Subtle Gradient Overlay at bottom for name readability if needed, 
                                    but we put name in text column for cleaner look. 
                                    Just a subtle vignette. */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-40" />
                            </motion.div>
                        </motion.div>

                        {/* Floating Badge (optional for authority) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-8 -left-4 md:left-8 bg-white p-6 shadow-xl max-w-xs border-l-4 border-medical-teal hidden md:block z-20"
                        >
                            <p className="font-serif italic text-slate-600">
                                "A excelência cirúrgica é um hábito, não um ato."
                            </p>
                        </motion.div>
                    </div>

                    {/* --- Text Content --- */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-medical-teal font-semibold tracking-widest text-sm uppercase mb-4">
                                Coordenação
                            </h4>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Condução técnica <br />
                                <span className="font-serif italic font-normal text-slate-500">especializada</span>.
                            </h2>

                            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                                <p>
                                    O curso é conduzido por <strong className="text-slate-900 font-medium">Dr. Guilherme Savassi</strong>, profissional com sólida experiência em microcirurgia veterinária.
                                </p>
                                <p>
                                    Sua abordagem foca no acompanhamento prático direto, garantindo que cada aluno receba a orientação necessária para refinar sua técnica e desenvolver autonomia cirúrgica com segurança.
                                </p>
                            </div>

                            {/* Credentials / Signature line */}
                            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4">
                                <div>
                                    <p className="text-slate-900 font-bold text-lg">Dr. Guilherme Savassi</p>
                                    <p className="text-sm text-slate-500">Cirurgião Veterinário | Coordenador Técnico</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
