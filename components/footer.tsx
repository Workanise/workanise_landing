import Link from 'next/link'
import Image from 'next/image'
import { Twitter, TextIcon as Telegram, Youtube, FileText} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-zinc-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
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
            <p className="text-zinc-400 text-sm">
              Building an ultrastandard workspace for web3 freelance solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-zinc-400 hover:text-[#00faa7]">Home</Link></li>
              <li><Link href="#about" className="text-zinc-400 hover:text-[#00faa7]">About</Link></li>
              <li><Link href="#roadmap" className="text-zinc-400 hover:text-[#00faa7]">Roadmap</Link></li>
              <li><Link href="/terms-of-service" className="text-zinc-400 hover:text-[#00faa7]">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">Proposal/Partnership: <a href="mailto:contact@workanise.com" className="text-[#00faa7]">contact@workanise.com</a></li>
              <li className="text-zinc-400">Enquiry: <a href="mailto:info@workanise.com" className="text-[#00faa7]">info@workanise.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-[#00faa7]"><Twitter /></a>
              <a href="https://t.me/workanisecommumity" className="text-zinc-400 hover:text-[#00faa7]"><Telegram /></a>
              <a href="http://Youtube.com/workanise" className="text-zinc-400 hover:text-[#00faa7]"><Youtube /></a>
              <a href="#" className="text-zinc-400 hover:text-[#00faa7]"><FileText /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-zinc-400 text-sm">
            © {currentYear} Workanise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

