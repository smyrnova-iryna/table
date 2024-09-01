'use client';

import Header from "./Header";
import Table from "./Table";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import data from "../app/data/dataset.json";

interface DataType {
        ["Tracking ID"]: number,
        ["Product Image"]: string,
        ["Product Name"]: string,
        ["Customer"]: string,
        ["Date"]: string,
        ["Amount"]: number,
        ["Payment Mode"]: string,
        ["Status"]: string
}

export interface DataTypes extends Array<DataType>{}


export default function TablePage() {

    const [defaultData, setDefaultData] = useState<DataTypes>(data);
    const [sortedData, setSortedData] = useState<DataTypes>(data);
    const [currentData, setCurrentData] = useState<DataTypes>((data as DataTypes as any[]).slice(0, 10));
    const [paginationValue, setPaginationValue] = useState<number>(1);
    const [rowsPerPageValue, setRowsPerPageValue] = useState<number>(10);
    const [paginationCount, setPaginationCount] = useState<number>(Math.floor(data.length/rowsPerPageValue));
    const [searchString, setSearchString] = useState<string>("");
    const [descendingSortOrder, setDescendingSortOrder] = useState<boolean>(true)


    const deleteRow = (rowId: number) => {
        const deleteItemIndex = defaultData.findIndex((e) => e["Tracking ID"] === rowId);
        setDefaultData([...defaultData.slice(0, deleteItemIndex), ...defaultData.slice(deleteItemIndex + 1, defaultData.length)])
    }


    const sortData = (sortValue: string) => {
        if (descendingSortOrder) {
            setSortedData([...sortedData.sort((a: any, b: any) => {
                const nameA = a[sortValue].toUpperCase(); 
                const nameB = b[sortValue].toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
                })]);
        } else {
            setSortedData([...sortedData.sort((a: any, b: any) => {
                const nameA = a[sortValue].toUpperCase(); 
                const nameB = b[sortValue].toUpperCase(); 
                if (nameA > nameB) {
                  return -1;
                }
                if (nameA < nameB) {
                  return 1;
                }
                return 0;
                })]);
        }
        setDescendingSortOrder(!descendingSortOrder)
    }


    useEffect(() => {
        if (searchString) {
            setSortedData([
                ...defaultData.filter((item) => item["Tracking ID"].toString().substring(0, searchString.length) === searchString.toString()), 
                ...defaultData.filter((item) => item["Product Name"].substring(0, searchString.length).toLowerCase() === searchString.toLowerCase()),
                ...defaultData.filter((item) => item["Customer"].substring(0, searchString.length).toLowerCase() === searchString.toLowerCase()),
                ...defaultData.filter((item) => item["Date"].substring(0, searchString.length) === searchString),
                ...defaultData.filter((item) => item["Amount"].toString().substring(0, searchString.length) === searchString.toString()),
                ...defaultData.filter((item) => item["Payment Mode"].substring(0, searchString.length).toLowerCase() === searchString.toLowerCase()),
                ...defaultData.filter((item) => item["Status"].substring(0, searchString.length).toLowerCase() === searchString.toLowerCase())
            ])
        } 
        else setSortedData([...defaultData])
    }, [searchString, defaultData]);


    useEffect(() => {
        setPaginationCount(Math.floor(sortedData.length/rowsPerPageValue));
        setPaginationValue(1);
	}, [rowsPerPageValue, sortedData]);


    useEffect(() => {
        setCurrentData([...sortedData.slice(rowsPerPageValue * (paginationValue - 1), rowsPerPageValue * paginationValue)]);
	}, [rowsPerPageValue, paginationValue, sortedData]);


    return (
        <main className="flex min-h-screen flex-col min-w-screen">
            <Header rowsPerPageValue={rowsPerPageValue} setRowsPerPageValue={setRowsPerPageValue} setPaginationCount={setPaginationCount} searchString={searchString} setSearchString={setSearchString}/>
            <Table data={currentData} deleteRow={deleteRow} sortData={sortData}/>
            {sortedData.length > rowsPerPageValue ?  
                <Pagination paginationValue={paginationValue} paginationCount={paginationCount} setPaginationValue={setPaginationValue}/>
              : <></>
            }
        </main>
    );
  }