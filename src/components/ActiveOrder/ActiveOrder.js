import React from 'react';
import styled from 'styled-components'

import handleMoney from '../../functions/handleMoney'

const Header = (props) => {

    return ( 
        <div>
            <div>Pedido em andamento</div>
            {props.order.restaurantName}
            <div>SUBTOTAL: R$ {handleMoney(props.order.totalPrice)}</div>
            
        </div>
     );
}
 
export default Header;