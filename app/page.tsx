'use client'

import { PresaleCard } from "@/components/presale-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/ui/glow-card"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts'
import { FAQSection } from "@/components/faq-section"
import { HowToParticipate } from "@/components/how-to-participate"

export default function Home() {
  const tokenomicsData = [
    { name: "Foundation/Community Reserve", value: 25, color: "#00b374" },
    { name: "Launchpad", value: 5, color: "#b48e41" },
    { name: "Team", value: 10, color: "#8d3583" },
    { name: "Marketing/Listing", value: 25, color: "#00cc86" },
    { name: "Advisors", value: 1.5, color: "#8c41d7" },
    { name: "Public Sales", value: 30, color: "#db6161" },
    { name: "Strategic Partnership", value: 3.5, color: "#ecf147" },
  ]

  

  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden">
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Web3 Workspace
              <GradientText className="block">Reinvented</GradientText>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl">
              Building an ultrastandard workspace for web3 freelance solutions, reshaping digital services with community as the foundation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
               onClick={() => (window.location.href = "/presale")}
              size="lg" className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
                Join Presale
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700">
                Learn More
              </Button>
            </div>
          </div>
          
          <PresaleCard />
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tokenomics</h2>
            <p className="text-zinc-400">Token Distribution & Allocation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <GlowCard className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-zinc-400">Allocation</TableHead>
                    <TableHead className="text-right text-zinc-400">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenomicsData.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell className="text-white">{item.name}</TableCell>
                      <TableCell className="text-right text-[#00faa7]">{item.value}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlowCard>

            {/* <GlowCard className="p-6"> */}
              <div className="h-[400px] flex items-center justify-center w-full ">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
    
            {/* </GlowCard> */}
            
          </div>

          <div className="text-sm text-zinc-400 space-y-2 max-w-2xl mx-auto">
            <p>- 75% locked of team token for 13months.</p>
            <p>- 1.4% will be unlocked from MW monthly.</p>
            <p>- Foundation and community reserve locked for 2months and 0.5% monthly after.</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Roadmap</h2>
            <p className="text-zinc-400">Our Journey to Success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                phase: "Phase One",
                title: "During Presale",
                items: [
                  "Presale Launch",
                  "Smart Contract Deployment and Audit",
                  "Lite Paper Release",
                  "Team Allocation Locked for 13month",
                  "Presale Marketing",
                  "CMC & CG Prelisting"
                ]
              },
              {
                phase: "Phase Two",
                title: "After Presale",
                items: [
                  "Partnership Announcement",
                  "Prelaunch Tier 1 Cex Announcement",
                  "Presalers Whitelist Benefits Announced"
                ]
              },
              {
                phase: "Phase Three",
                title: "TG Mini Launch",
                items: [
                  "Workanise Tg Mini App Launch (Dual purposes)",
                  "TG and Twitter Marketing Unleashed",
                  "More Partnership onboarded"
                ]
              },
              {
                phase: "Phase Four",
                title: "Mid Tg Launch",
                items: [
                  "1000 Trainee Programme",
                  "Internship",
                  "Buy Back and Burn Mechanism Introduced",
                  "More Cex Announcement",
                  "100K Members Onboarded"
                ]
              },
              {
                phase: "Phase Five",
                title: "Workanise.com Launch",
                items: [
                  "White Paper Released",
                  "Launch of Workanise's Ultrastandard Workspace Solutions",
                  "Release of Workanise Road Map 2.0"
                ]
              }
            ].map((phase) => (
              <GlowCard key={phase.phase} className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#00faa7] font-semibold">{phase.phase}</h3>
                    <p className="text-xl font-bold mt-1 text-white">{phase.title}</p>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-zinc-400">
                        <ChevronRight className="w-4 h-4 mt-1 text-[#00faa7]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Workanise</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Workanise.com is building an ultrastandard workspace for web3 freelance solutions, 
              to reshape and to sail web3 digital services in the right track, using the community 
              as the building block.
            </p>
            <Button size="lg" className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <HowToParticipate />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Workanise Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-white">Workanise</span>
            </div>
            <p className="text-zinc-400 text-sm text-center">
              © {new Date().getFullYear()} Workanise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

