// MyComponent.tsx (or any component using API data)
import {  useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import ServicesCard from '../ServicesCard/iindex';
import { EMPTY } from '../../enums';

const Hospitals = () => {
    const { data,loading } = useContext(DataContext);
    const [searchVal, setSearchVal] = useState(EMPTY.string)
const [hospitalsData, setHospitalsData] = useState(data)


    useEffect(() => {
        if (data?.length ) {
            setHospitalsData(data?.splice(0, 50))
        }
       
    }, [data])

    
    
    
    return (
        <>
            
<form className="max-w-md mx-auto p-5">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" onChange={(e:any)=>setSearchVal(e.target.value)} className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Hospitals.." value={searchVal}  />
    </div>
</form>

            <div className="flex flex-wrap justify-center gap-5">
                {loading?<p className='text-center '>Fetching Data..</p>:
              searchVal?.length? hospitalsData?.filter((item: any) => item.name.toLowerCase().includes(searchVal.toLowerCase()))?.map((item:any,index:number) => <ServicesCard index={index} key={item.id} heading={item.name}  image='doctor.png'/>):hospitalsData?.map((item:any,index:number) => <ServicesCard index={index} key={item.id} heading={item.name}  image='doctor.png'/>)}
            </div>
            </>
  );
};

export default Hospitals;
