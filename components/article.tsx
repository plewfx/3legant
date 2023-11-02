import { ArticleProps } from "@/types"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const Article = ({ img, title }: ArticleProps) => {
    return (
        <div className="grid grid-rows-[3fr_1fr] lg:grid-rows-[5fr_1fr] gap-4 lg:gap-6">
            <div style={{ backgroundImage: `url(${img})` }} className="bg-center bg-no-repeat bg-cover">
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h3 className="text-neutural-05 text-base lg:text-xl font-semibold leading-snug">{title}</h3>
                <Button variant="link">
                    Read More
                    <ArrowRight color="#6C7275" width={20} height={20} />
                </Button>
            </div>
        </div>
    )
}