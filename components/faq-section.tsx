"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GlowCard } from "@/components/ui/glow-card"

const faqs = [
  {
    question: "What is Workanise?",
    answer: "Workanise is an ultrastandard workspace for web3 freelance solutions, designed to reshape and streamline web3 digital services. We focus on building a strong community-driven platform that ensures safe and smooth transactions between buyers and sellers."
  },
  {
    question: "How can I participate in the presale?",
    answer: "You can participate in the presale by connecting your wallet or using a credit card through our presale platform. We accept ETH and USDT for cryptocurrency payments. The minimum purchase amount and exact token price will be announced soon."
  },
  {
    question: "What is the total token supply?",
    answer: "The total supply of WORK tokens is 365 Million, with a Max Total Supply of 365 Million. The tokens are distributed across different allocations including public sales (30%), marketing (25%), and community reserve (25%)."
  },
  {
    question: "Are the team tokens locked?",
    answer: "Yes, 75% of team tokens are locked for 13 months. Also 1.4% monthly unlocked for Marketing while the Foundation and Community reserve is locked for 2 months after launch with 0.5% monthly release thereafter"
  },
  {
    question: "What blockchain network is Workanise built on?",
    answer: "Workanise (WORK) is built on the Ethereum network as an ERC-20 token, ensuring security, reliability, and wide compatibility with existing web3 infrastructure."
  },
  {
    question: "What are the benefits of participating in the presale?",
    answer: "Presalers have access to buy cheaper prelaunch, obtain freelance discount up to 50%, free Work Points only obtainable by community mining  and wallet whitelisted for additional benefits for presalers."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-zinc-400">Everything you need to know about Workanise</p>
        </div>

        <GlowCard className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-[#00faa7] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlowCard>
      </div>
    </section>
  )
}

