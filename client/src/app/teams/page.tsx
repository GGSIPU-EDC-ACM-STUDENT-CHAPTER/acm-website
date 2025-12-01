import TeamsHero from "@/components/teams/TeamsHero";
import TeamSection from "@/components/teams/TeamSection";
import CinematicScroll from "@/components/teams/CinematicScroll";
import {
  facultyMembers,
  officeBearers,
  technicalTeam,
  creativeTeam,
} from "@/data/teamData";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Cinematic Scroll Indicator */}
      <CinematicScroll />

      {/* Hero Section */}
      <TeamsHero />

      {/* Content Sections */}
      <div className="relative">
        {/* Faculty Coordinators */}
        <TeamSection
          title="Faculty Coordinators"
          subtitle="PROLOGUE: The Mentors"
          members={facultyMembers}
          sectionNumber="00"
        />

        {/* Office Bearers */}
        <TeamSection
          title="The Leadership"
          subtitle="ACT I: Office Bearers"
          members={officeBearers}
          sectionNumber="01"
        />

        {/* Technical Team */}
        <TeamSection
          title="Technical Knights"
          subtitle="ACT II: Technical Domain"
          members={technicalTeam}
          sectionNumber="02"
        />

        {/* Creative Team */}
        <TeamSection
          title="The Artisans"
          subtitle="ACT III: Creative Domain"
          members={creativeTeam}
          sectionNumber="03"
        />

        {/* Final Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-acm-blue to-transparent max-w-7xl mx-auto" />

        {/* Closing Credits */}
        <div className="py-24 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-4">
            End Credits
          </p>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white/10">
            To Be Continued...
          </h3>
        </div>
      </div>
    </main>
  );
}
