import React from 'react';
import { useProtectedPage } from '../../hooks/useProtection'


const EditProfile = (props) => {

    useProtectedPage()
    
    return ( 
        <div>
        </div>
     );
}
 
export default EditProfile;