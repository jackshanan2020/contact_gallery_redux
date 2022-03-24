import React from 'react'
import { TextField, styled } from '@material-ui/core'
//--------------------------------------------
const SearchField = styled(TextField)({
    backgroundColor: '#fff',
    width:300,
    margin:'20px 0',
   
})
export default function Search(rest) {
  
    return (
        <>
       
            <SearchField
                type='search'
                name='search' 
                variant='outlined'         
                {...rest}

            />
          

        </>
    )
}
