import { Button } from "@/components/ui/button";
import { HeroImage } from "./HeroImage";

const Header = () => (
  <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-4 absolute top-0 left-1/2 -translate-x-1/2 z-20">
    <div className="text-2xl font-bold text-gray-900">DyadStore</div>
    <nav className="hidden md:flex items-center space-x-8 text-gray-800">
      <a href="#" className="hover:text-gray-900 transition-colors">About</a>
      <a href="#" className="hover:text-gray-900 transition-colors">Blog</a>
      <a href="#" className="hover:text-gray-900 transition-colors">Pages</a>
      <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
    </nav>
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="ghost" className="text-gray-800 hover:bg-gray-200/50">Login</Button>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Get Started Free</Button>
    </div>
  </header>
);

export const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFA] overflow-hidden font-sans">
      {/* Background Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-[-20rem] left-[-30rem] w-[30rem] h-[30rem] bg-yellow-300/50 rounded-full filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-[-10rem] right-[-35rem] w-[35rem] h-[35rem] bg-red-400/50 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20rem] left-[-10rem] w-[30rem] h-[30rem] bg-green-400/50 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <Header />

      <main className="relative z-10 container mx-auto px-8 pt-32 md:pt-40 lg:pt-48">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="text-left">
            <h1 className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-[#12141D] leading-none" style={{ letterSpacing: '-0.05em' }}>
              Sense Every Buyer Signal. Drive Every B2B Sale.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#12141D]/70 max-w-md">
              Seamlessly identify, engage, and convert your highest intent B2B prospects with ease.
            </p>
            <Button size="lg" className="mt-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-base font-semibold">
              Watch 2-Min Demo
            </Button>
          </div>

          {/* Right Side: Image/Cards */}
          <div className="relative h-[600px] hidden lg:block">
            <HeroImage />
          </div>
        </div>
      </main>
    </div>
  );
};