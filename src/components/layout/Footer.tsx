"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#020617] text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
            {/* Background Grain/Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold text-white tracking-tighter">
                                AMC<span className="text-medical-teal">VET</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Elevando o padrão da cirurgia veterinária através de educação prática de excelência e tecnologia de ponta.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Linkedin} href="#" />
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Navegação</h4>
                        <ul className="space-y-4 text-sm">
                            <li><FooterLink href="#">Início</FooterLink></li>
                            <li><FooterLink href="#diferenciais">Diferenciais</FooterLink></li>
                            <li><FooterLink href="#formato">Formato</FooterLink></li>
                            <li><FooterLink href="#cadastro">Inscrição</FooterLink></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><FooterLink href="#">Termos de Uso</FooterLink></li>
                            <li><FooterLink href="#">Política de Privacidade</FooterLink></li>
                            <li><FooterLink href="#">Política de Cancelamento</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-medical-teal shrink-0" />
                                <span>Av. Example, 1000 - São Paulo, SP</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-medical-teal shrink-0" />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-medical-teal shrink-0" />
                                <span>contato@amcvet.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {new Date().getFullYear()} AMC VET Educação Veterinária. Todos os direitos reservados.</p>
                    <p className="text-slate-600 flex items-center gap-1">
                        Desenvolvido com <span className="text-red-900">❤</span> para veterinários.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon: Icon, href }: any) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-medical-teal hover:bg-medical-teal/10 transition-all duration-300"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}

function FooterLink({ href, children }: any) {
    return (
        <a
            href={href}
            className="hover:text-medical-teal transition-colors duration-200 block"
        >
            {children}
        </a>
    );
}
