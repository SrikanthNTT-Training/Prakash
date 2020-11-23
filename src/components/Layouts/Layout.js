import React from 'react';

import Auxa from '../../hoc../Auxa';
const layout = (props)=>(
<Auxa>
    <div>Toolbar,SideDrawer,Backdrop</div>
<main>
    {props,children}
    </main>
    </Auxa>
    

    );
    export default layout;