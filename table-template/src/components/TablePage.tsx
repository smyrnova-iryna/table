'use client';

import Header from "./Header";
import Table from "./Table";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import data from "../app/data/dataset.json";

export interface DataTypes {
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

export default function TablePage() {
    
    const [defaultData, setDefaultData] = useState<DataTypes>(data);
    const [sortedData, setSortedData] = useState<DataTypes>(data);
    const [currentData, setCurrentData] = useState<DataTypes>((sortedData as DataTypes as any[]).slice(0, 10));
    const [sortValue, setSortValue] = useState<string>("");
    const [paginationValue, setPaginationValue] = useState<number>(1);
    const [rowsPerPageValue, setRowsPerPageValue] = useState<number>(10);
    const [paginationCount, setPaginationCount] = useState<number>(Math.floor(data.length/rowsPerPageValue));
    const [searchString, setSearchString] = useState<string>("");

    const deleteRow = (rowId: number) => {
        const deleteItemIndex = (defaultData as DataTypes as any[]).findIndex((e) => e["Tracking ID"] === rowId);
        setDefaultData([...(defaultData as DataTypes as any[]).slice(0, deleteItemIndex), ...(defaultData as DataTypes as any[]).slice(deleteItemIndex + 1, (defaultData as DataTypes as any[]).length)] )
    }

    // const sortByItem = (comparisonFunction: (value1: string|number, value2: string|number) => number ) => {
    //     setSortedData((sortedData as DataTypes as any[]).sort(comparisonFunction))
    // }

    // const sortByItem = (sortValue: string) => {
    //     // const comparisonFunction = (a: any, b: any) => {
    //     //     return  Number(a[sortValue]) - Number(b[sortValue])
    //     // }
    //     // setSortedData((sortedData as DataTypes as any[]).sort(comparisonFunction));
    //     // console.log((sortedData as DataTypes as any[]).sort(comparisonFunction))
        

    //     const newArr = (sortedData as DataTypes as any[]).sort((a, b) => {
    //         const nameA = a[sortValue].toUpperCase(); // ignore upper and lowercase
    //         const nameB = b[sortValue].toUpperCase(); // ignore upper and lowercase
    //         if (nameA < nameB) {
    //           return -1;
    //         }
    //         if (nameA > nameB) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    //       console.log(newArr, "-newArr");
    //       setSortedData(
    //         (sortedData as DataTypes as any[]).sort((a, b) => {
    //             const nameA = a[sortValue].toUpperCase(); // ignore upper and lowercase
    //             const nameB = b[sortValue].toUpperCase(); // ignore upper and lowercase
    //             if (nameA < nameB) {
    //               return -1;
    //             }
    //             if (nameA > nameB) {
    //               return 1;
    //             }
    //             return 0;
    //           })
    //       )
    //       console.log(sortedData, "-sortedData");
    // }

    useEffect(() => {
        
        setSortedData(
            (sortedData as DataTypes as any[]).sort((a, b) => {
                const nameA = String(a[sortValue]).toUpperCase(); // ignore upper and lowercase
                const nameB = String(b[sortValue]).toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              })
          );

          console.log(sortValue)
          console.log(sortedData)
	}, [sortValue, sortedData, currentData]);

    // comparisonFunction

    
    

// -------------------------------------------
    // useEffect(() => {
    //     if (searchString !== "") {
    //         setSortedData((defaultData as DataTypes as any[]).filter((item) => item["Product Name"].toUpperCase().includes(searchString.toUpperCase())));
    //     } 
	// }, [searchString, defaultData]);
// --------------------------------------------
    useEffect(() => {
        if (searchString !== "") {
            setSortedData([
                ...(defaultData as DataTypes as any[]).filter((item) => item["Tracking ID"].toString().substr(0, searchString.length).toUpperCase() === searchString.toString().toUpperCase()), 
                ...(defaultData as DataTypes as any[]).filter((item) => item["Product Image"].substr(0, searchString.length).toUpperCase() === searchString.toUpperCase()),
                ...(defaultData as DataTypes as any[]).filter((item) => item["Product Name"].substr(0, searchString.length).toUpperCase() === searchString.toUpperCase()),
                ...(defaultData as DataTypes as any[]).filter((item) => item["Customer"].substr(0, searchString.length).toUpperCase() === searchString.toUpperCase()),
                ...(defaultData as DataTypes as any[]).filter((item) => item["Date"].substr(0, searchString.length).toUpperCase() === searchString.toUpperCase()),
                ...(defaultData as DataTypes as any[]).filter((item) => item["Amount"].toString().substr(0, searchString.length).toUpperCase() === searchString.toString().toUpperCase()),
                ...(defaultData as DataTypes as any[]).filter((item) => item["Payment Mode"].substr(0, searchString.length).toUpperCase() === searchString.toUpperCase()),
                ...(defaultData as DataTypes as any[]).filter((item) => item["Status"].substr(0, searchString.length).toUpperCase() === searchString.toUpperCase())
            ])
        } 
        else setSortedData((defaultData as DataTypes as any[]))
    }, [searchString, defaultData]);
// --------------------------------------------

    useEffect(() => {
        setPaginationCount(Math.floor((sortedData as DataTypes as any[]).length/rowsPerPageValue));
        setPaginationValue(1);
	}, [rowsPerPageValue, sortedData]);

    useEffect(() => {
        setCurrentData((sortedData as DataTypes as any[]).slice(rowsPerPageValue * (paginationValue - 1), rowsPerPageValue * paginationValue));
	}, [rowsPerPageValue, paginationValue, sortedData]);
// -----------------------------------------
    // useEffect(() => {
        
    // }, [defaultData, sortedData, currentData]);
// -------------------------------------------

    return (
        <main className="flex min-h-screen flex-col min-w-screen">
            <Header rowsPerPageValue={rowsPerPageValue} setRowsPerPageValue={setRowsPerPageValue} setPaginationCount={setPaginationCount} searchString={searchString} setSearchString={setSearchString}/>
            {/* <Table data={currentData} deleteRow={deleteRow} sortByItem={sortByItem}/> */}
            <Table data={currentData} deleteRow={deleteRow} setSortValue={setSortValue}/>
            {
              (sortedData as DataTypes as any[]).length > rowsPerPageValue ?  
                <Pagination paginationValue={paginationValue} paginationCount={paginationCount} setPaginationValue={setPaginationValue}/>
              : <></>
            }
        </main>
    );
  }