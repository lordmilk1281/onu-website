import { cn } from "@/utils"
import { SVGProps } from "react"
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    className={cn("feather feather-x w-6 h-6", props.className)}
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
export default XIcon
