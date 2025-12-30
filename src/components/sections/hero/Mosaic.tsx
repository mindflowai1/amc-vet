"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Mosaic() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-medical-teal" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Main Container for Parallax Items */}
            <div className="relative z-10 w-full max-w-lg aspect-square">

                {/* Item 1: Main Surgical Scene (Top Right) */}
                <motion.div
                    className="absolute top-0 right-0 w-64 h-80 bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ y: -5, transition: { duration: 0.4 } }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/vet_surgery.png"
                            alt="Cirurgia Veterinária"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-medical-teal/40 to-transparent mix-blend-multiply" />
                        <div className="absolute bottom-4 left-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white drop-shadow-md">Centro Cirúrgico</span>
                        </div>
                    </div>
                </motion.div>

                {/* Item 2: Detail/Instrument (Bottom Left) -> Replaced with "Precision" Technical UI */}
                <motion.div
                    className="absolute bottom-12 left-4 w-56 h-56 bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/surgical_precision.png"
                            alt="Instrumentação Cirúrgica"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white drop-shadow-md">Precisão</span>
                        </div>
                    </div>
                </motion.div>

                {/* Item 3: Tech/Microscopy (Floating Element) -> Enhanced Glassmorphism */}
                <motion.div
                    className="absolute top-24 -left-8 w-36 h-36 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/60 border border-white shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-medical-teal/10 to-transparent opacity-80" />
                    <div className="relative z-10 text-center flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-medical-teal to-teal-900">4K</div>
                        <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-surgical-orange to-transparent my-1" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block leading-tight">Alta<br />Complexidade</span>
                    </div>
                </motion.div>

                {/* Decorative Circle */}
                <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 border border-surgical-orange/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
                />
            </div>
        </div>
    );
}
