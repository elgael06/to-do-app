import { Button, Card, Icon, TextareaItem } from 'antd-mobile'
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardFooter from 'antd-mobile/lib/card/CardFooter';
import CardHeader from 'antd-mobile/lib/card/CardHeader'
import React, { useState } from 'react'

export default function AddNote({set=e=>e}){
    const [note,setNote] = useState({
        title:'',
        data:'',
        status:false
      });
      
    const reset = () => {
      setNote({
        title:'',
        data:'',
        status:false
      });
    }
        
    const agregar = () => {
        set({...note});
        reset();
    }

    return(<div className='content-note' style={{
      width:'calc( 100% - 10px) ',
      maxWidth:550
    }}>
        <Card full>
          <CardHeader
            thumb='https://pbs.twimg.com/profile_images/950276667972472832/1qtkCeDK.jpg'
            thumbStyle={{
              height:40,
              width:40
            }}
            title={<TextareaItem
                placeholder='Titulo...'
                autoFocus
                value={note.title}
                onChange={e=>setNote({...note,title:e})}
            />}
            extra={
              <Icon type='cross-circle' onClick={reset} />
            }
          />
          <CardBody style={{
            maxHeight:170,
            overflow:'auto'
          }}>
            <TextareaItem
              autoHeight
              placeholder='Descripcion...'
              disabled={!note.title}
              value={note.data}
              onChange={e=>setNote({...note,data:e})}
            />
          </CardBody>

          <CardFooter 
            extra={<Button 
                type='primary' 
                style={{
                    width:100,
                    float:'right'
                }} 
                onClick={agregar}
                disabled={!note.data}
                size='small'>listo</Button>}
          />
        </Card>
    </div>);
}