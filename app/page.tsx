import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>page.tsx file where is button</h1>
      <button>button

      <UserButton afterSignOutUrl="/"/>
      </button>
    </div>
  )
}