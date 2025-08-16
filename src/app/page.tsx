"use client"

import AppAreaChart from '@/components/AreaChart';
import AppBarChart from '@/components/BarChart';
import AppPieChart from '@/components/PieChart';
import React from 'react';



export default function Home() {




  return (
   <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
    
    <div className='bg-primary-foreground p-4 rounded-md '>
      <AppBarChart />
      </div> 
        <div className='bg-primary-foreground p-4 rounded-md lg:col-span-2'>
      <AppAreaChart />
    </div>
    <div className='bg-primary-foreground p-4 rounded-md '>content</div>
  
    <div className='bg-primary-foreground p-4  rounded-md lg:col-span-2'>
      <AppPieChart />
    </div>
    <div className='bg-primary-foreground p-4  rounded-md  '>content</div>
    

   </div>
  );
}
