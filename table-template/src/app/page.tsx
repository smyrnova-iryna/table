'use client';

import TablePage from "@/components/TablePage";

interface DataTypes {
  [index: number] : 
  {
      ["Tracking ID"]: number,
      ["Product Image"]: string,
      ["Product Name"]: string,
      ["Customer"]: string,
      ["Date"]: string,
      ["Amount"]: number,
      ["Payment Mode"]: string,
      ["Status"]: string
  }
}

export default function Home() {
  
  return (
    <>
    <TablePage/>
    </>
  );
}


