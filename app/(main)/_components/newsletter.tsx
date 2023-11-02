import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export const Newsletter = () => {
    return (
        <section className="bg-center bg-cover" style={{ backgroundImage: "url(/newsletter.png)"}}>
            <div className="container py-24 flex justify-center">
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-[28px] lg:text-[40px] font-medium font-poppins text-neutural-07">Join Our Newsletter</h2>
                        <p className="text-neutural-07 text-sm lg:text-lg">Sign up for deals, new products and promotions</p>
                    </div>
                    <form className="flex gap-2 py-3 border-b border-neutural-04">
                        <Mail width={24} height={24} />
                        <input className="focus:outline-none" type="email" placeholder="Email address" />
                        <Button variant="ghost" className="text-neutural-04">Signup</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}