import LandingApple from "@/components/LandingApple";
import { loadLandingForTina } from "@/lib/load-landing";

export const metadata = {
  title: "Northline Motors — Auto Repair",
  description: "ASE-certified auto repair in Dallas–Fort Worth.",
};

export default function HomePage() {
  const props = loadLandingForTina("home.md");
  return <LandingApple {...props} />;
}
