import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Paradox } from "@/components/sections/Paradox";
import { Reframe } from "@/components/sections/Reframe";
import { Curriculum } from "@/components/sections/Curriculum";
import { Challenge } from "@/components/sections/Challenge";
import { Masters } from "@/components/sections/Masters";
import { Moment } from "@/components/sections/Moment";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Curriculum />
      <Paradox />
      <Reframe />
      <Challenge />
      <Masters />
      <Moment />
    </main>
  );
}
