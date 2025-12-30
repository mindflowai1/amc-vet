"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Lock, Send, Smartphone, User, Stethoscope, BookOpen, ChevronRight, Sparkles } from "lucide-react";

export function LeadCaptureSection() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [selectedPlan, setSelectedPlan] = useState("imersao"); // Default to Imersão
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handlePlanSelection = (event: CustomEvent) => {
            if (event.detail) {
                setSelectedPlan(event.detail);
            }
        };
        window.addEventListener('selectPlan', handlePlanSelection as EventListener);
        return () => window.removeEventListener('selectPlan', handlePlanSelection as EventListener);
    }, []);

    const handleNext = () => {
        if (step === 1 && name.length > 2) {
            setStep(2);
        } else if (step === 2 && whatsapp.length > 8) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        // Here you would integrate with your backend/Supabase
        // Simulate loading
        setIsSubmitted(true);
        console.log("Captured:", { name, whatsapp, plan: selectedPlan });
    };

    return (
        <section id="cadastro" className="relative py-12 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-[30%] -right-[10%] w-[1000px] h-[1000px] bg-gradient-to-br from-medical-teal/5 via-teal-100/20 to-transparent rounded-full blur-3xl opacity-70" />
                <div className="absolute -bottom-[30%] -left-[10%] w-[800px] h-[800px] bg-gradient-to-tr from-[#FE9E31]/5 via-orange-100/20 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">

                    {/* --- Left: Value Proposition --- */}
                    <div className="w-full lg:w-1/2 pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 shadow-xl shadow-slate-900/10 mb-8 border border-slate-800/50 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-teal opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-teal"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">Vagas Limitadas</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Transforme sua <br />
                                realidade <span className="relative whitespace-nowrap">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31]">
                                        cirúrgica.
                                    </span>
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-medical-teal/10 -z-10 skew-x-12" />
                                </span>
                            </h2>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
                                Não deixe para depois a evolução que sua carreira precisa hoje. Garanta acesso a condições exclusivas para a próxima turma.
                            </p>

                            <div className="flex flex-col gap-4">
                                <FeatureItem text="Cronograma antecipado por WhatsApp" />
                                <FeatureItem text="Bônus exclusivo para os 10 primeiros inscritos" />
                                <FeatureItem text="Acesso direto à coordenação do curso" />
                            </div>
                        </motion.div>
                    </div>

                    {/* --- Right: The Modern Form --- */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Blur behind form */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-medical-teal to-[#FE9E31] rounded-[2.5rem] blur opacity-20" />

                            <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-100">

                                {/* Progress Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">
                                            {isSubmitted ? "Concluído" : "Ficha de Interesse"}
                                        </p>
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {isSubmitted ? "Tudo pronto!" : step === 1 ? "Identificação" : "Contato"}
                                        </h3>
                                    </div>
                                    {!isSubmitted && (
                                        <div className="flex items-center gap-1">
                                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step === 1 ? "bg-medical-teal scale-125" : "bg-slate-200"}`} />
                                            <div className="w-8 h-0.5 bg-slate-100 rounded-full" />
                                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step === 2 ? "bg-medical-teal scale-125" : "bg-slate-200"}`} />
                                        </div>
                                    )}
                                </div>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <SuccessState />
                                    ) : step === 1 ? (
                                        <StepOne
                                            name={name}
                                            setName={(e: any) => setName(e.target.value)}
                                            selectedPlan={selectedPlan}
                                            setSelectedPlan={setSelectedPlan}
                                            onNext={handleNext}
                                        />
                                    ) : (
                                        <StepTwo
                                            name={name}
                                            whatsapp={whatsapp}
                                            setWhatsapp={(e: any) => setWhatsapp(e.target.value)}
                                            onBack={() => setStep(1)}
                                            onSubmit={handleSubmit}
                                        />
                                    )}
                                </AnimatePresence>

                                {!isSubmitted && (
                                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                                        <Lock className="w-3 h-3" />
                                        Dados protegidos pela LGPD
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- Sub-components with Enhanced UI ---

function StepOne({ name, setName, selectedPlan, setSelectedPlan, onNext }: any) {
    return (
        <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8"
        >
            {/* Modern Collapsible Plan Selector */}
            <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-700 block pl-1">
                    Qual seu objetivo atual?
                </label>

                <CollapsiblePlanSelector
                    selectedPlan={selectedPlan}
                    onSelect={setSelectedPlan}
                />
            </div>

            {/* Floating Label Input Style */}
            <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-700 block pl-1">
                    Seu nome completo
                </label>
                <div className="group relative">
                    <input
                        type="text"
                        value={name}
                        onChange={setName}
                        className="peer w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 rounded-2xl px-5 pl-12 py-5 text-lg text-slate-900 placeholder-transparent focus:outline-none focus:border-medical-teal/50 focus:bg-white focus:ring-4 focus:ring-medical-teal/10 transition-all font-medium"
                        placeholder="Nome Completo"
                        id="nameInput"
                    />
                    <label
                        htmlFor="nameInput"
                        className="absolute left-12 top-2.5 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-5 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-medical-teal pointer-events-none"
                    >
                        Digite seu nome aqui...
                    </label>
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 peer-focus:text-medical-teal transition-colors" />
                </div>
            </div>

            <button
                onClick={onNext}
                disabled={name.length < 3}
                className="w-full bg-slate-900 hover:bg-black text-white rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-xl shadow-slate-900/10"
            >
                Continuar
                <ChevronRight className="w-5 h-5" />
            </button>
        </motion.div>
    );
}

function CollapsiblePlanSelector({ selectedPlan, onSelect }: any) {
    const [isOpen, setIsOpen] = useState(false);

    const plans = [
        {
            id: 'imersao',
            label: 'Imersão Prática',
            sub: 'Experiência Real & Mentoria',
            icon: Stethoscope,
            color: 'text-medical-teal'
        },
        {
            id: 'ouvinte',
            label: 'Ouvinte',
            sub: 'Teoria & Observação',
            icon: BookOpen,
            color: 'text-slate-500'
        }
    ];

    const activePlan = plans.find(p => p.id === selectedPlan) || plans[0];

    return (
        <div className="relative z-20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between hover:border-medical-teal/30 focus:outline-none focus:border-medical-teal/50 transition-all shadow-sm group"
            >
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${selectedPlan === 'imersao' ? 'bg-medical-teal/10 text-medical-teal' : 'bg-slate-100 text-slate-500'} flex items-center justify-center transition-colors group-hover:scale-105 duration-300`}>
                        <activePlan.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-slate-900 text-base">{activePlan.label}</p>
                        <p className="text-xs text-slate-500 font-medium">{activePlan.sub}</p>
                    </div>
                </div>
                <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-90 bg-slate-100" : "rotate-0"}`}>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-medical-teal" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-30"
                    >
                        {plans.map((plan) => (
                            <button
                                key={plan.id}
                                onClick={() => {
                                    onSelect(plan.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-3 flex items-center gap-4 hover:bg-slate-50 transition-colors border-b last:border-0 border-slate-50 ${selectedPlan === plan.id ? "bg-slate-50/80" : ""}`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.id === selectedPlan ? "bg-medical-teal/10 text-medical-teal" : "bg-slate-100 text-slate-400"}`}>
                                    <plan.icon className="w-5 h-5" />
                                </div>
                                <div className="text-left flex-1">
                                    <p className={`text-sm font-bold ${plan.id === selectedPlan ? "text-slate-900" : "text-slate-600"}`}>
                                        {plan.label}
                                    </p>
                                    <p className="text-xs text-slate-400">{plan.sub}</p>
                                </div>
                                {plan.id === selectedPlan && <Check className="w-5 h-5 text-medical-teal" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function StepTwo({ name, whatsapp, setWhatsapp, onSubmit, onBack }: any) {
    const firstName = name.split(" ")[0];

    return (
        <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8"
        >
            <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-700 block pl-1">
                    WhatsApp para contato
                </label>

                {/* Greeting Bubble */}
                <div className="inline-block bg-slate-100 px-4 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-slate-600 text-sm mb-2 font-medium">
                    Prazer, {firstName}! 👋
                </div>

                <div className="group relative">
                    <input
                        type="tel"
                        value={whatsapp}
                        onChange={setWhatsapp}
                        className="peer w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 rounded-2xl px-5 pl-12 py-5 text-lg text-slate-900 placeholder-transparent focus:outline-none focus:border-medical-teal/50 focus:bg-white focus:ring-4 focus:ring-medical-teal/10 transition-all font-medium tracking-wide"
                        placeholder="WhatsApp"
                        id="whatsappInput"
                        autoFocus
                    />
                    <label
                        htmlFor="whatsappInput"
                        className="absolute left-12 top-2.5 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-5 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-medical-teal pointer-events-none"
                    >
                        (00) 00000-0000
                    </label>
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 peer-focus:text-medical-teal transition-colors" />
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={onBack}
                    className="px-6 py-5 rounded-2xl font-bold bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                >
                    Voltar
                </button>
                <button
                    onClick={onSubmit}
                    disabled={whatsapp.length < 8}
                    className="flex-1 bg-gradient-to-r from-medical-teal to-[#FE9E31] text-white rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] hover:shadow-xl hover:shadow-medical-teal/20 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-shadow-sm"
                >
                    Finalizar Cadastro
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    )
}

function SuccessState() {
    return (
        <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
        >
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="w-24 h-24 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 relative shadow-xl shadow-green-500/20">
                    <Check className="w-12 h-12 text-white" strokeWidth={3} />
                </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">Solicitação Recebida!</h3>
            <p className="text-slate-500 max-w-xs mx-auto mb-8 leading-relaxed">
                Você acaba de dar o primeiro passo para sua evolução técnica. Verifique seu WhatsApp em breve.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#FE9E31]" />
                Admissão AMC VET
            </div>
        </motion.div>
    )
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:border-medical-teal/30 transition-colors">
                <Check className="w-4 h-4 text-medical-teal" strokeWidth={2.5} />
            </div>
            <span className="text-slate-700 font-medium text-lg">{text}</span>
        </div>
    );
}
