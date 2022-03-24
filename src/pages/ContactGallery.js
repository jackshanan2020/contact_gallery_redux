import React,{useState} from 'react'
import { connect } from 'react-redux';

import { ContactCard } from '../components/ContactCard/'
import Page from '../components/Page'
import {Search} from '../components/Search/'
import { Container, Grid,styled } from '@material-ui/core'
import {useSelector} from 'react-redux'
//--------------------------------------------------

const PageContainer=styled(Container)({
    backgroundColor:'slategrey'
})
 const ContactGallery=()=> {
    
    const [query,setQuery]=useState('')
    const contacts=useSelector(state=>state.contacts)
//  console.log(contacts)
    const filterSearch=(e)=>{
        console.log(e.target.value)
        
    }
    return (
        <>
            <Page title='Contact Gallery'>
                <PageContainer maxWidth='xl'>
                    <Search onChange={filterSearch}/>
                    <Grid container justifyContent='center'>
                    <Grid container item lg={10} direction='row' spacing={2}>
                        {
                            contacts.map((contact, i) => (
                                <Grid key={i} xs={4}>
                                    <ContactCard  contact={contact} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    </Grid>
                </PageContainer>
            </Page>
        </>
    )
}
export default ContactGallery