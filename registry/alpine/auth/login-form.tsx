import { cn } from "@/lib/utils"
import { Button } from "@/registry/alpine/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/alpine/ui/card"
import { Input } from "@/registry/alpine/ui/input"
import { Label } from "@/registry/alpine/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login or Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                    required
                  />
                  <div className="text-muted-foreground text-sm">
                    We will send a text message to verify your phone number.
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Or
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  Continue with Apple
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with Email
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with Facebook
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
