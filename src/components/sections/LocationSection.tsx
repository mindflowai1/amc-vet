"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LocationSection() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">

                    {/* Left: Content & Details */}
                    <div className="w-full lg:w-4/12 p-10 lg:p-12 flex flex-col justify-center bg-white relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-medical-teal font-semibold tracking-widest text-sm uppercase mb-4 block">
                                Localização
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                No coração de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-teal to-[#FE9E31]">
                                    Belo Horizonte
                                </span>
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-medical-teal flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-lg">AMC VET</p>
                                        <p className="text-slate-500 leading-relaxed">
                                            Av. do Contorno, 4396 <br />
                                            Funcionários, Belo Horizonte - MG
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-medical-teal flex-shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Horário de Funcionamento</p>
                                        <p className="text-slate-500">
                                            Segunda a Sexta: 08h às 18h
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300"
                                onClick={() => window.open("https://www.google.com/maps/dir//Av.+do+Contorno,+4396+-+Funcion%C3%A1rios,+Belo+Horizonte+-+MG,+30110-027/@-19.9329845,-43.9247656,17z", "_blank")}
                            >
                                <Navigation className="w-5 h-5 group-hover:text-[#FE9E31] transition-colors" />
                                Traçar Rota
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: The Map */}
                    <div className="w-full lg:w-8/12 relative min-h-[400px] lg:min-h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.817349788019!2d-43.9247656!3d-19.9329845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e86376049d%3A0x6334586237735398!2sAv.%20do%20Contorno%2C%204396%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030110-027!5e0!3m2!1spt-BR!2sbr!4v1709665000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.9)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        />

                        {/* Overlay Gradient for seamless blend */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none lg:w-32" />
                    </div>
                </div>
            </div>
        </section>
    );
}
