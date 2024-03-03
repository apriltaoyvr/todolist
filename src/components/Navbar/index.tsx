import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  return(
    <nav className='w-full sticky top-0 flex flex-row place-items-center place-content-end py-4 px-2'>
      <ModeToggle/>
    </nav>
  )
}