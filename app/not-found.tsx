import Icon404 from "@/components/icon-404"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  return (
    <div className="flexCenter flex-col text-center min-h-[60vh] md:min-h-[75vh] w-full md:max-w-[570px] mx-auto px-3">
      <Icon404 />
      <h1 className="cfu-title tracking-tighter text-balance text-2xl md:text-3xl font-bold mb-3 capitalize">page not found</h1>
      <p className="mb-9">
        This page could not be found. It might have been removed or renamed, or it may never have existed.
      </p>
      <Button variant="outline" size="sm" className="btn">Button</Button>
    </div>
  )
}

export default NotFound
