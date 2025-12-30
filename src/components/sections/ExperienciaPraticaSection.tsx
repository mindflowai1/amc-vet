"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Play, Pause, Maximize2, Activity, ShieldCheck, UserCheck } from "lucide-react";

export function ExperienciaPraticaSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section
            ref={containerRef}
            className="relative py-24 lg:py-0 bg-slate-900 overflow-hidden text-white"
        >
            <div className="flex flex-col lg:flex-row h-full lg:min-h-[800px]">

                {/* --- Left Side: Content --- */}
                <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center relative z-10 bg-slate-900">

                    {/* Background Grid for Tech Feel */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-medical-teal">
                            <Activity className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-widest uppercase">Imersão Total</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                            Uma experiência que simula a <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31]">rotina cirúrgica real</span>
                        </h2>

                        <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-xl">
                            O curso foi desenhado para reproduzir o contexto hospitalar, permitindo que o aluno desenvolva segurança técnica e tomada de decisão sob orientação especializada.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-6">
                            <FeatureRow
                                icon={ShieldCheck}
                                title="Segurança Técnica"
                                desc="Protocolos rígidos de assepsia e manuseio."
                                delay={0.2}
                            />
                            <FeatureRow
                                icon={UserCheck}
                                title="Orientação Especializada"
                                desc="Feedback imediato de cirurgiões experientes."
                                delay={0.3}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* --- Right Side: Immersive 'Video' Player --- */}
                <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto bg-black overflow-hidden group">

                    {/* Placeholder Video Background (Simulated with Gradient/Image) */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Abstract shapes to simulate video content blur */}
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-teal/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FE9E31]/10 rounded-full blur-[100px]" />
                    </motion.div>

                    {/* Overlay Grid / UI Interface */}
                    <div className="absolute inset-0 border-[1px] border-white/5 m-4 box-border pointer-events-none">
                        {/* Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-medical-teal/50" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-medical-teal/50" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-medical-teal/50" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-medical-teal/50" />

                        {/* REC Indicator */}
                        <div className="absolute top-6 right-6 flex items-center gap-2">
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                            />
                            <span className="text-xs font-mono text-white/70">REC • 00:00:00:00</span>
                        </div>

                        {/* Bottom Data Overlay */}
                        <div className="absolute bottom-6 left-6 font-mono text-xs text-medical-teal/80 space-y-1">
                            <p>MODE: LIVE SURGERY</p>
                            <p>MAGNIFICATION: 4.5x</p>
                            <p>ISO: 800</p>
                        </div>
                    </div>

                    {/* Play Button Center (Simulate Interactivity) */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer group-hover:scale-100 scale-90 md:scale-100"
                        >
                            {isPlaying ? (
                                <Pause className="w-8 h-8 fill-current opacity-80" />
                            ) : (
                                <Play className="w-8 h-8 fill-current opacity-80 ml-1" />
                            )}
                        </motion.button>
                    </div>

                    {/* Scanlines Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
                </div>
            </div>
        </section>
    );
}

function FeatureRow({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4"
        >
            <div className="mt-1 p-2 bg-slate-800 rounded-lg text-medical-teal">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="text-white font-semibold mb-1">{title}</h4>
                <p className="text-slate-400 text-sm">{desc}</p>
            </div>
        </motion.div>
    );
}
