import { headerNav } from "../config";
import Button from "./ui/Button";
const Header = () => {
  return (
    <header className="py-3 relative z-10">
      <div className="w-5xl mx-auto flex justify-between items-center">
        <a href="" className="text-5xl text-yellow-main">
          BARBER GO
        </a>
        <nav>
          <ul className="flex gap-[17px] items-center">
            {headerNav.map((item) => (
              <li key={item.id} className="text-white">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
            <Button className="bg-yellow-main px-3 py-1.5">LOG IN</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
