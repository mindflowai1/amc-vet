"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

export function PricingSection() {

    const scrollToForm = (plan: string) => {
        const section = document.getElementById("cadastro");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            // Dispatch event to notify form about selection
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent("selectPlan", { detail: plan }));
            }, 300); // Small delay to allow scroll to start/settle visual focus
        }
    };

    return (
        <section id="investimento" className="py-12 md:py-24 lg:py-32 bg-[#050b14] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-teal/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FE9E31]/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-medical-teal font-semibold tracking-widest text-sm uppercase"
                    >
                        Investimento
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 text-white mb-6"
                    >
                        Escolha seu nível de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31]">
                            profundidade técnica
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        Garanta sua vaga em uma das turmas exclusivas. Vagas limitadas para garantir a qualidade do ensino prático.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Observador / Teórico */}
                    <PricingCard
                        title="Ouvinte"
                        price="R$ 2.500"
                        description="Ideal para quem deseja absorver a base teórica e acompanhar cirurgias sem atuar diretamente."
                        features={[
                            "Acesso às aulas teóricas",
                            "Acompanhamento visual das práticas",
                            "Coffee break incluso",
                            "Certificado de participação (Teórico)",
                            "Network com especialistas"
                        ]}
                        delay={0.1}
                        onSelect={() => scrollToForm("ouvinte")}
                    />

                    {/* Card 2: Prático (Featured) */}
                    <PricingCard
                        title="Imersão Prática"
                        price="R$ 5.900"
                        description="A experiência completa. Opere, decida e refine sua técnica com supervisão direta."
                        features={[
                            "Tudo do plano Ouvinte",
                            "Prática em microscópio individual",
                            "Cirurgias em tecido vivo (rotina real)",
                            "Mentoria técnica personalizada",
                            "Kit cirúrgico exclusivo",
                            "Certificado de Habilitação Prática"
                        ]}
                        isPopular
                        delay={0.2}
                        onSelect={() => scrollToForm("imersao")}
                    />
                </div>

                {/* Guarantee / Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                        <Star className="w-4 h-4 text-[#FE9E31]" />
                        Condições especiais para ex-alunos e grupos. Entre em contato.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

function PricingCard({ title, price, description, features, isPopular, delay, onSelect }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative flex flex-col p-8 lg:p-10 rounded-3xl border transition-all duration-300 group
                ${isPopular
                    ? "bg-slate-900 border-medical-teal shadow-2xl shadow-medical-teal/10 scale-100 md:scale-105 z-10"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                }
            `}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-medical-teal to-teal-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                    Recomendado
                </div>
            )}

            <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${isPopular ? "text-white" : "text-slate-200"}`}>{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-5xl font-bold text-white">{price}</span>
                    <span className="text-slate-500 text-sm font-medium">/único</span>
                </div>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex-1 space-y-4 mb-8">
                {features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 p-0.5 rounded-full ${isPopular ? "bg-medical-teal text-white" : "bg-slate-800 text-slate-400"}`}>
                            <Check className="w-3 h-3" />
                        </div>
                        <span className={`text-sm ${isPopular ? "text-slate-300" : "text-slate-400"}`}>{feature}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={onSelect}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300
                ${isPopular
                        ? "bg-gradient-to-r from-medical-teal to-teal-500 text-white hover:shadow-lg hover:shadow-medical-teal/25 hover:-translate-y-1"
                        : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                    }
            `}>
                Garantir Vaga
            </button>
        </motion.div>
    );
}
