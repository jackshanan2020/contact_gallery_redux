import React from 'react'
import { Paper, Avatar, Grid, styled, Typography, Box } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
//--------------------------------------------------------------------

const PaperWrapper = styled(Paper)({
    height: 300,
    width: 'auto',
    margin: '1rem'

})
const AddressGridItem = styled(Grid)({
    height: 100,
    color: '#fff',
    backgroundColor: 'violet',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'

})
const BioGridItem = styled(Grid)({
    color: '#424242',
    backgroundColor: '#fff',
    padding: '1rem'

})
const ContactGridItem = styled(Grid)({
    color: '#424242',
    backgroundColor: '#ddd',
    padding: '1rem'
})
const ContactAvatar = styled(Avatar)({
    height: 100,
    width: 100,
    border: '4px solid #fff'
})
const ContactToolbar = styled(Box)({
    display: 'flex',
    flexDirection: 'row'
})
export default function ContactCard({ contact }) {
    const { DESCRIPTION, DOB, EMAIL, LOCATION, NAME, PHONE, PHOTO, GENDER } = contact
    return (
        <>
            <PaperWrapper elevation={0}>
                <Grid container direction=''>


                    <AddressGridItem item xs={12} style={{ backgroundColor: GENDER === 'male' && '#249ed0' }}>
                        <ContactAvatar src={PHOTO} />
                        <Box>
                            <Typography variant='h5'>
                                {NAME}
                            </Typography>
                            <Typography variant='body2'>
                                {LOCATION}
                            </Typography>
                            <Typography variant='body1'>
                                {DOB}
                            </Typography>
                        </Box>
                    </AddressGridItem>
                    <BioGridItem item xs={12}>
                        <Typography>
                            {DESCRIPTION}
                        </Typography>
                    </BioGridItem>
                    <ContactGridItem item xs={12}>
                        <ContactToolbar>
                            <PhoneIcon />&nbsp;
                            <Typography>
                                {PHONE}
                            </Typography>
                        </ContactToolbar>
                        <ContactToolbar>
                            <EmailIcon />&nbsp;
                            <Typography>
                                {EMAIL}
                            </Typography>
                        </ContactToolbar>


                    </ContactGridItem>

                </Grid>

            </PaperWrapper>


        </>
    )
}
