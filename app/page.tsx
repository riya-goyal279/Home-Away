import { Button } from "@/components/ui/button";

function Homepage() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Homepage
    </h1>
    <Button value="Click me!" variant="outline" size="lg" className="capitalize m-8"> Click Me! </Button>
    </>
  )
}

export default Homepage;