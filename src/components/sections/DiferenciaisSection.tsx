
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Microscope, Users, UserCheck, Building2, LucideIcon, Sparkles } from "lucide-react";

// --- Types ---
type Differential = {
    id: number;
    title: string;
    icon: LucideIcon;
    description: string;
};

const differentials: Differential[] = [
    {
        id: 1,
        title: "Microscópio Individual",
        icon: Microscope,
        description: "Cada aluno dispõe de uma estação completa com microscópio de alta precisão 100% do tempo. Aqui você não divide foco, você domina a técnica."
    },
    {
        id: 2,
        title: "Turma Reduzida",
        icon: Users,
        description: "Para garantir a excelência, limitamos as vagas. Monitoria quase particular (1:2) para corrigir detalhes que fazem a diferença entre o bom e o excelente."
    },
    {
        id: 3,
        title: "Prática Supervisionada",
        icon: UserCheck,
        description: "Nossos instrutores não ficam no palco. Eles estão ao seu lado, guiando sua mão e afiando sua tomada de decisão em tempo real."
    },
    {
        id: 4,
        title: "Ambiente Hospitalar",
        icon: Building2,
        description: "Saia do laboratório simulado. Opere em um centro cirúrgico real, vivenciando a rotina, a pressão e o fluxo de um hospital de ponta."
    }
];

export function DiferenciaisSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 50%"]
    });

    // Smooth drawing of the line
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            id="diferenciais"
            ref={containerRef}
            className="relative py-32 bg-[#050b14] overflow-hidden"
        >
            {/* --- Ambient Background Effects --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900/50 via-[#050b14] to-[#050b14]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-teal/5 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FE9E31]/5 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* --- Header --- */}
                <div className="text-center mb-32 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-medical-teal text-sm font-semibold mb-4 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 inline-block mr-2" />
                            Nível Superior
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            A Evolução da Sua <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31] drop-shadow-lg">
                                Carreira Cirúrgica
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Esqueça a teoria distante. Mergulhe em uma experiência imersiva onde cada detalhe foi desenhado para maximizar sua proficiência técnica.
                        </p>
                    </motion.div>
                </div>

                {/* --- Timeline --- */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Central Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
                        {/* The Active Glowing Line */}
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-medical-teal via-medical-teal to-[#FE9E31] shadow-[0_0_20px_2px_rgba(13,148,136,0.6)]"
                        >
                            {/* Glowing Head */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_4px_#FE9E31]" />
                        </motion.div>
                    </div>

                    <div className="space-y-16 md:space-y-0">
                        {differentials.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: Differential; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial="off"
            whileInView="on"
            viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
            className="flex flex-col md:flex-row md:items-center w-full relative pt-2 md:pt-0"
        >
            {/* Desktop Left Spacer/Content */}
            <div className={`hidden md:flex flex-1 justify-end pr-16 ${!isEven ? "invisible" : ""}`}>
                {isEven && <TimelineCard item={item} align="right" />}
            </div>

            {/* Center/Left Node */}
            <div className="absolute left-8 md:static md:left-auto flex items-center justify-center flex-shrink-0 z-20 mt-6 md:mt-0">
                <TimelineNode item={item} />
            </div>

            {/* Right Content (Mobile & Desktop Odd) */}
            <div className="flex-1 pl-20 md:pl-16 md:pr-0">
                {/* Mobile: Always Show Card Here */}
                <div className="md:hidden">
                    <TimelineCard item={item} align="left" />
                </div>

                {/* Desktop: Only Show if Odd */}
                <div className="hidden md:block">
                    {!isEven && <TimelineCard item={item} align="left" />}
                </div>
            </div>
        </motion.div>
    )
}

function TimelineCard({ item, align }: { item: Differential, align: "left" | "right" }) {
    return (
        <motion.div
            variants={{
                off: { opacity: 0.3, scale: 0.95, filter: "blur(4px)", x: align === "left" ? 20 : -20 },
                on: { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md relative overflow-hidden group hover:border-medical-teal/50 transition-colors
                ${align === "right" ? "md:text-right" : "text-left"}
            `}
        >
            {/* Hover internal glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-medical-teal transition-colors">
                {item.title}
            </h3>
            <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                {item.description}
            </p>
        </motion.div>
    );
}

function TimelineNode({ item }: { item: Differential }) {
    return (
        <motion.div
            variants={{
                off: { scale: 0.8, backgroundColor: "#0f172a", borderColor: "#334155" },
                on: { scale: 1.1, backgroundColor: "#0f172a", borderColor: "#0D9488" }
            }}
            transition={{ duration: 0.4 }}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center z-10 shadow-xl relative"
        >
            {/* Icon */}
            <motion.div
                variants={{ off: { color: "rgba(148, 163, 184, 0.5)" }, on: { color: "#0D9488" } }}
                className="relative z-10"
            >
                <item.icon className="w-5 h-5 md:w-7 md:h-7" />
            </motion.div>

            {/* Active Halo */}
            <motion.div
                variants={{
                    off: { opacity: 0 },
                    on: { opacity: 1, scale: 1.4 }
                }}
                className="absolute inset-0 rounded-full border border-medical-teal/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow */}
            <motion.div
                variants={{
                    off: { opacity: 0 },
                    on: { opacity: 1 }
                }}
                className="absolute inset-0 rounded-full bg-medical-teal/20 blur-md"
            />
        </motion.div>
    );
}
