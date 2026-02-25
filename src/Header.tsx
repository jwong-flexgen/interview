import { Button } from "./components/ui/button";

function Header({}) {
  return (
    <div className='bg-gray-200 w-full p-4 flex items-center justify-center gap-2'>
      <Button>Category</Button>
      <Button>Price</Button>
    </div>
  )
}

export default Header;
