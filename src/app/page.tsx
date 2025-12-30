import { HeroSection } from "@/components/sections/hero/HeroSection";
import { DiferenciaisSection } from "@/components/sections/DiferenciaisSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { ExperienciaPraticaSection } from "@/components/sections/ExperienciaPraticaSection";
import { AutoridadeSection } from "@/components/sections/AutoridadeSection";
import { FormatoCursoSection } from "@/components/sections/FormatoCursoSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { LeadCaptureSection } from "@/components/sections/LeadCaptureSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-clinical-white">
            <HeroSection />
            <DiferenciaisSection />
            <TargetAudienceSection />
            <ExperienciaPraticaSection />
            <AutoridadeSection />
            <FormatoCursoSection />
            <PricingSection />
            <LeadCaptureSection />
            <LocationSection />
            <Footer />
        </main>
    );
}
