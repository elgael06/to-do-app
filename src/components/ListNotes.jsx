import { Card, Checkbox, WhiteSpace } from 'antd-mobile'
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardHeader from 'antd-mobile/lib/card/CardHeader';
import React from 'react'

export default function ListNotes({lista=[]}){

    const cambioStatus = (status,index) => {
        lista[index].status = status === 'pendiente' ? 'listo' : 'pendiente';
    }

    return (
        <div style={{
            height:'calc( 100% - 300px )',
            margin:'10px 0',
            overflow:'auto'
          }}>
            {lista.map((item,index)=>{
                 return(<div key={index}>
                     <Card color='#ffffff'>
                         <CardHeader 
                             title={item.title}
                             extra={<Checkbox 
                                cambioStatus={()=>cambioStatus(item.status,index)}
                                checked={item.status==='listo'}
                            />}
                         />
                         <CardBody>
                             {item.data}
                         </CardBody>
                     </Card>
                     <WhiteSpace size='sm'/>
                </div>);
             })}
          </div>
    );
}