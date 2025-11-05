import { Zap } from 'lucide-react'
import HeroSection from '@/components/hero-section'

const CryptoToolsPage = () => {
  return (
    <>
      <HeroSection
        icon={Zap}
        title="Crypto"
        highlight="Tools"
        description="A collection of powerful, free tools to help you analyze, calculate, and manage your cryptocurrency investments."
      />
    </>
  )
}

export default CryptoToolsPage
