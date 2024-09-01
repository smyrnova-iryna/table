'use client';

import { DataTypes } from "./TablePage";
import Image from 'next/image';
import EditIcon from "../../public/edit.svg";
import TrashIcon from "../../public/trash.svg";
import SortIcon from "../../public/bxs_sort-alt.svg";
// import { DataType } from "./TablePage";

// import { useEffect, useState } from "react";
interface TableProps {
  data: DataTypes,
  deleteRow: (value: number) => void,
  setSortValue : (value: string) => void
  // sortByItem: (value: string) => void
}


export default function Table(props: TableProps) {
 
    const tableHeadingStyles = "p-4 font-bold text-left min-w-[121px]";
    const tableHeadingWithSortStyles = "flex flex-row justify-between";
    const tableColumnStyles = "pr-4 pl-4 pt-6 pb-6 font-medium min-w-[121px]"

    // console.log(props.data, "data from TABLE")


    return ( 
      <table className="text-sm text-black dark:bg-darkprimary1 dark:text-white">
        <thead >
          <tr>
            <th className={`${tableHeadingStyles} text-center`}>Tracking ID</th>
            <th className={tableHeadingStyles}>
              <div className={tableHeadingWithSortStyles}>
                <span>Product</span>
                <Image
                  onClick={() => {props.setSortValue("Product Name")}}
                  src={SortIcon}
                  alt="sort icon"
                  width={17}
                  height={17}
                />
              </div>
            </th>
            <th className={tableHeadingStyles}>
              <div className={tableHeadingWithSortStyles}>
                <span>Customer</span>
                <Image
                  src={SortIcon}
                  alt="sort icon"
                  width={17}
                  height={17}
                />
              </div>
            </th>
            <th className={tableHeadingStyles}>
              <div className={tableHeadingWithSortStyles}>
                <span>Date</span>
                <Image
                  src={SortIcon}
                  alt="sort icon"
                  width={17}
                  height={17}
                />
              </div>
            </th>
            <th className={tableHeadingStyles}>Amount</th>
            <th className={tableHeadingStyles}>Payment Mode</th>
            <th className={tableHeadingStyles}>
              <div className={tableHeadingWithSortStyles}>
                <span>Status</span>
                <Image
                  src={SortIcon}
                  alt="sort icon"
                  width={17}
                  height={17}
                />
              </div>
            </th>
            <th className={`${tableHeadingStyles} text-center`}>Action</th>
          </tr>
        </thead>
        <tbody >
          {
            (props.data as DataTypes as any[]).map((item) => (
              <tr key={item["Tracking ID"]} className={(props.data as DataTypes as any[]).indexOf(item)%2 === 1 ? "bg-white dark:bg-darkprimary1" : "bg-primary1 dark:bg-darkprimary2"}>
                <td className={`${tableColumnStyles} text-center`}>#{item["Tracking ID"]}</td>
                <td className={`${tableColumnStyles} flex flex-row gap-2 items-center`}>
                  <Image
                    className="rounded-lg"
                    src={item["Product Image"]}
                    alt="product"
                    unoptimized
                    width={32}
                    height={32}
                />
                  <span>{item["Product Name"]}</span>
                </td>
                <td className={tableColumnStyles}>{item.Customer}</td>
                <td className={tableColumnStyles}>{item.Date}</td>
                <td className={tableColumnStyles}>{item.Amount}</td>
                <td className={tableColumnStyles}>{item["Payment Mode"]}</td>
                <td className={`${tableColumnStyles} text-xs`}>
                  <span className={`rounded-[22px] pt-2 pb-2 pl-3 pr-3 ${item.Status === "Cancelled" ? "bg-canceledBg text-canceledText" : item.Status === "Process" ? "bg-processBg text-processText" : "bg-deliveredBg text-deliveredText"}`}>
                    {item.Status}
                  </span>
                </td>
                <td className={tableColumnStyles}>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Image
                        src={EditIcon}
                        alt="edit icon"
                        width={24}
                        height={24}
                    />
                    <Image
                        className="cursor-pointer"
                        onClick={() => {props.deleteRow(item["Tracking ID"])}}
                        src={TrashIcon}
                        alt="trash icon"
                        width={24}
                        height={24}
                  />
                  </div>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    );
  }