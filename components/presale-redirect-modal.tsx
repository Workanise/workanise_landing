"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog"

interface PresaleRedirectModalProps {
    isOpen: boolean
    onClose: () => void
}

export function PresaleRedirectModal({ isOpen, onClose }: PresaleRedirectModalProps) {
    const router = useRouter()
    const [isRedirecting, setIsRedirecting] = useState(false)

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsRedirecting(true)
                onClose()
                router.push("https://app.hel.io/pay/678ce784a8f2dca1e48eec56")  // External URL
            }, 3000) // 3 seconds delay

            return () => clearTimeout(timer)
        }
    }, [isOpen, onClose, router])

    if (!isOpen) return null

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="sm:max-w-md bg-black border-zinc-800 text-white">
                <div className="flex flex-col items-center justify-center p-6 space-y-6">
                    <div className="relative w-24 h-24">
                        <Image
                            src="/images/logo.png"
                            alt="Workanise Logo"
                            width={96}
                            height={96}
                            className="animate-pulse"
                        />
                    </div>
                    <p className="text-center text-lg">
                        {isRedirecting ? "Redirecting to presale..." : "Preparing your presale experience..."}
                    </p>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}
