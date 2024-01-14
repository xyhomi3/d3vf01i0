import { Button } from "@/components/atoms/button"
import { LogOut } from "lucide-react"
import { signOut } from "@/lib/auth"

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button className="flex gap-3 w-full" {...props}>
        <span>Sign Out</span> <LogOut size={20}/>
      </Button>
    </form>
  )
}