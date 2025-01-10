import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white max-w-[1000px] mx-auto">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 pt-10">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Terms of Use</h2>
            <p className="text-zinc-300">
              These "Terms of Use" govern your access to and use of all content, products, and services provided on the website (referred to as the "Service") operated by Workanise or otherwise spelt as workanis3 ("we," "us," or "our"). By accessing and using our services, you agree to comply with these terms, which apply without modification. These terms also incorporate all other operating rules and policies we may publish from time to time. Please read this agreement carefully before using the services. By using any part of our services, you agree to these terms. If you do not agree to any part of the agreement, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Copyright</h2>
            <p className="text-zinc-300">
              We at Workanise reserve all copyright over the text and images on our platform. These materials may not be copied, reproduced, or distributed without our express written permission. In cases where use is approved, the source must be credited as Workanise, and this attribution must appear in all forms of distribution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">E-mail Communication</h2>
            <p className="text-zinc-300">
              You may choose to communicate with us via email, but please be aware that email is not always a secure form of communication. By sending unencrypted confidential or sensitive emails, you accept the risk that your message may be intercepted, and the privacy of your information may be compromised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">No Warranty</h2>
            <p className="text-zinc-300">
              The information provided by Workanise is intended as a service or promotion for its users, customers, and others, but it should not be considered legal advice. Although we strive to provide accurate and up-to-date information, Workanise does not guarantee the accuracy, completeness, or reliability of this information. It is provided "as is," without any express or implied warranties, including but not limited to warranties of merchantability or fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">No Liability</h2>
            <p className="text-zinc-300">
              Workanise is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the information contained in our newsletters or services. Any reliance on such information is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Changes to Information</h2>
            <p className="text-zinc-300">
              We reserve the right to modify this information at any time without notice. We are not obligated to update the information presented in our newsletters or on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Intellectual Property</h2>
            <p className="text-zinc-300">
              This agreement does not transfer any of our or third-party intellectual property to you. All rights, titles, and interests in such property remain with Workanise or its licensors. You may not use, reproduce, or distribute any intellectual property belonging to us or third parties without express permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Third-Party Services</h2>
            <p className="text-zinc-300">
              While using our services, you may engage with third-party services, products, or software ("Third-Party Services"). Use of these services is at your own risk, and Workanise is not responsible for the performance, content, or security of any third-party services or websites. We disclaim all responsibility for any damage or loss caused by your use of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Accounts</h2>
            <p className="text-zinc-300">
              If you are required to create an account to use any part of our services, you must provide accurate, complete information during registration. You are responsible for maintaining the security of your account, including keeping your password safe. You must notify us immediately if you suspect unauthorized use of your account or any security breaches. Any activity occurring under your account is your responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Termination</h2>
            <p className="text-zinc-300">
              We reserve the right to suspend or terminate your access to our services, in whole or part, at any time, with or without cause, and without prior notice. If you wish to terminate your account or this agreement, you may simply discontinue using our services. Certain provisions of this agreement, such as ownership rights, warranty disclaimers, indemnity, and limitations of liability, will survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Disclaimer</h2>
            <p className="text-zinc-300">
              Our services are provided on an "as is" and "as available" basis. Workanise and its suppliers make no warranties, express or implied, regarding the performance, availability, or uninterrupted access to our services. You use the services at your own risk, and we disclaim any liability for errors or interruptions in the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00faa7]">Changes to Terms</h2>
            <p className="text-zinc-300">
              We reserve the right to update or modify these terms at our discretion. If any significant changes are made, we will notify you by posting the revised terms on our website or through email. Such changes will take effect after a designated period. If you do not agree with the updated terms, you should stop using our services. Continued use of our services will constitute acceptance of the new terms.
            </p>
          </section>

          <section>
            <p className="text-zinc-300">
              For further inquiries, please contact us at <a href="mailto:contact@workanise.com" className="text-[#00faa7] hover:underline">contact@workanise.com</a>
            </p>
          </section>
        </div>

      </div>
    </div>
  )
}

