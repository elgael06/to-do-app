import { Button, Card, TextareaItem } from 'antd-mobile'
import CardBody from 'antd-mobile/lib/card/CardBody';
import CardFooter from 'antd-mobile/lib/card/CardFooter';
import CardHeader from 'antd-mobile/lib/card/CardHeader'
import React, { useState } from 'react'

export default function AddNote({set=e=>e}){
    const [note,setNote] = useState({
        title:'',
        data:'',
        status:'pendiente'
      });
      
      const reset = () => {
          setNote({
              title:'',
              data:'',
              status:'pendiente'
            });
        }
        
    const agregar = () => {
        set(note);
        reset();
    }

    return(<div className='content-note'>
        <Card full>
          <CardHeader
            thumb='https://pbs.twimg.com/profile_images/950276667972472832/1qtkCeDK.jpg'
            thumbStyle={{
              height:40,width:40
            }}
            title={<TextareaItem
                title='Nueva nota'
                placeholder='Titulo...'
                autoFocus
                value={note.title}
                onChange={e=>setNote({...note,title:e})}
            />}
          />
          <CardBody>
            <TextareaItem 
              rows={2}
              placeholder='Descripcion...'
              disabled={!note.title}
              value={note.data}
              onChange={e=>setNote({...note,data:e})}
            />
          </CardBody>

          <CardFooter 
            content={<Button
                type='warning' 
                style={{width:100}}
                onClick={reset}
                size='small'>Cancelar</Button>}
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