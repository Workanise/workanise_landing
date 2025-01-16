import { DashboardLayout } from "@/components/dashboard/layout"
import { DashboardHeader } from "@/components/dashboard/header"
import { MainContent } from "@/components/dashboard/main-content"
import { DashboardFooter } from "@/components/dashboard/footer"

export default function PresalePage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <MainContent />
      <DashboardFooter />
    </DashboardLayout>
  )
}

