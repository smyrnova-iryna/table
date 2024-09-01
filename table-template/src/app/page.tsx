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
  // const [currentData, setCurrentData] = useState<DataTypes>([
  //   {
  //     ["Tracking ID"]: 13,
  //     ["Product Image"]: "string",
  //     ["Product Name"]: "string",
  //     ["Customer"]: "string",
  //     ["Date"]: "string",
  //     ["Amount"]: 12,
  //     ["Payment Mode"]: "string",
  //     ["Status"]: "string"
  // }
  // ]);
  // const arr = fetchFunc();
  // console.log(arr);
  // let currentData: DataTypes;

  // const arr3 = fetchFunc(0, 10);
  
  // arr3.then(res => {currentData =  res; console.log(currentData, 'currentDataaaacd')})
  
  
//   useEffect(() => {  
//     const arr2 = fetchFunc(11, 20);
//     arr2.then(res => {currentData =  res; console.log(currentData, 'currentDataaaacd')})

//     console.log("fetch from page", fetchFunc(11, 20))

// }, []);
  
  return (
    <>
    {/* <GetData/> */}
    {/* <FetchFunc/> */}
    <TablePage/>

    {/* <p>{currentData[1]["Product Name"]}</p>
    <p>{currentData[0]["Product Name"]}</p> */}
    </>
  );
}





// import { promises as fs } from 'fs';

// interface DataTypes {
//     [index: number] : 
//     {
//         ["Tracking ID"]: number,
//         ["Product Image"]: string,
//         ["Product Name"]: string,
//         ["Customer"]: string,
//         ["Date"]: string,
//         ["Amount"]: number,
//         ["Payment Mode"]: string,
//         ["Status"]: string
//     }
// }
// export default async function Page() {
//     const file = await fs.readFile(process.cwd() + '/src/app/data/dataset.json', 'utf8');
//     console.log(file);
//     console.log(typeof file[0]);
//     const objectData : DataTypes = JSON.parse(file);
//     console.log(objectData);
//   return (
//     <div>
//       <p>{objectData[0]["Tracking ID"]}</p>
//       <p>{objectData[0]["Product Image"]}</p>
//       <p>{objectData[0]["Product Name"]}</p>
//       <p>{objectData[0]["Customer"]}</p>
//       <p>{objectData[0]["Date"]}</p>
//       <p>{objectData[0]["Amount"]}</p>
//       <p>{objectData[0]["Payment Mode"]}</p>
//       <p>{objectData[0]["Status"]}</p>
//       <p>Done!!!!!!!!!!!!!!!!!!!!!!!!!</p>
//       <p>{objectData[1]["Tracking ID"]}</p>
//       <p>{objectData[1]["Product Image"]}</p>
//       <p>{objectData[1]["Product Name"]}</p>
//       <p>{objectData[1]["Customer"]}</p>
//       <p>{objectData[1]["Date"]}</p>
//       <p>{objectData[1]["Amount"]}</p>
//       <p>{objectData[1]["Payment Mode"]}</p>
//       <p>{objectData[1]["Status"]}</p>
//     </div>
//   );
// }