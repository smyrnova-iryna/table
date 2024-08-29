import Image from "next/image";
import AddIcon from "../../public/fluent_add-16-filled.svg"

export default function Header() {
    return (
      <header className="w-screen h-16 p-4 bg-white text-xs flex justify-between">
        <div className="flex items-start gap-2 flex-col sm:flex-row sm:gap-6 sm:items-center">
            <p className="flex items-center gap-3 relative">
                <span>Show</span>
                <select id="rowsperpage" className="bg-secondary1 rounded-lg border-transparent p-2 pr-4">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
                <span>entries</span>
            </p>
            <input placeholder="Search..." className="rounded-lg border-[1px] border-solid border-secondary2 p-2 pl-[33px] w-[160px] sm:w-[218px] searchbar" />
        </div>
        <button className="rounded-lg bg-accent1 flex justify-evenly items-center gap-2 p-2 w-[139px]">
            <Image
            priority
            src={AddIcon}
            height={16}
            width={16}
            alt="Follow us on Twitter"
            />
            <span>Add Customer</span>
        </button>
      </header>
    );
  }