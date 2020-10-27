import { Card, Checkbox, WhiteSpace } from 'antd-mobile'
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardHeader from 'antd-mobile/lib/card/CardHeader';
import React from 'react'

export default function ListNotes({lista=[],updateNote=(note,index) =>null,status=false}){

    const cambioStatus = (status,index) => {
        console.log('cambio status');
         const dato = lista[index];
         dato.status = !status;
        updateNote(dato,index);
    }

    return (
        <div style={{
            height:'calc( 100% - 300px )',
            margin:'10px 0',
            overflow:'auto'
          }}>
            {lista.filter(e=>e.status===status).map((item,index)=>{
                 return(<div key={index}>
                     <Card color='#ffffff'>
                         <CardHeader 
                             title={item.title}
                             extra={<Checkbox 
                                onChange={()=>cambioStatus(item.status,index)}
                                checked={item.status}
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