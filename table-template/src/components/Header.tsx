'use client';

import Image from "next/image";
import ThemeToggler from "./ThemeToggler";
import AddIcon from "../../public/fluent_add-16-filled.svg"

interface HeaderProps {
    rowsPerPageValue: number,
    setRowsPerPageValue: (value: number) => void,
    setPaginationCount: (value: number) => void,
    searchString: string,
    setSearchString: (value: string) => void,
}

export default function Header(props: HeaderProps) {
    return (
      <header className="max-w-full p-4 bg-white text-xs flex justify-between sm:h-16 dark:bg-black">
        <div className="flex items-start gap-2 flex-col sm:flex-row sm:gap-6 sm:items-center">
            <p className="flex items-center gap-3 relative">
                <span>Show</span>
                <select value={props.rowsPerPageValue} onChange={(e) => {props.setRowsPerPageValue(Number(e.target.value))}} id="rowsperpage" className="bg-secondary1 rounded-lg border-transparent p-2 pr-4 cursor-pointer">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
                <span>entries</span>
            </p>
            <input onChange={(e) => {() => console.log(e.target.value); props.setSearchString(String(e.target.value)); console.log('props:', props.searchString)}}  placeholder="Search..." className="rounded-lg border-[1px] border-solid border-secondary2 p-2 pl-[33px] w-[160px] sm:w-[218px] searchbar" />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <ThemeToggler/>
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
        </div>
      </header>
    );
  }