import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography } from '@mui/material';


export default function FilterPrducts({searchstring, list}) {

const filteredList = list.filter((element) => {
   if (searchstring === '') {
       return element;
   }
   else {
       return element.title.toLowerCase().includes(searchstring)
   }
})

 return (
   <Box>
     <Stack spacing={2}
     sx={{
       overflow: 'auto',
       maxHeight: 500,

     }}
     >
     {filteredList.map((item) => (
               <Paper key={item.id}
               sx={{
                   textAlign:'left'
               }}  >
                   <Typography><strong>Name:</strong> {item.title}</Typography>
                   <Typography><strong>Country:</strong> {item.country}</Typography>
                   <Typography><strong>Team:</strong> {item.team}</Typography>
               </Paper>
           ))}

</Stack>
   </Box>
 )
}