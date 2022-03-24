import {useRoutes} from 'react-router-dom'
import ContactGallery from './pages/ContactGallery'
//----------------------------------------------------
export default function Routes(){
    return useRoutes([
        { path: '/', element: <ContactGallery/>}
    ])
}