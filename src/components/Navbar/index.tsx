import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex w-full flex-row place-content-end place-items-center px-2 py-4'>
      <ModeToggle />
    </nav>
  );
}
