import CTASection from "@/components/CTASection";
import GaleriaSection from "@/components/GaleriaSection";
import HeroAntigravity from "@/components/HeroAntigravity";
import ProcesoSection from "@/components/ProcesoSection";
import ServiciosSection from "@/components/ServiciosSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <HeroAntigravity />
      <ServiciosSection />
      <ProcesoSection />
      <GaleriaSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}
