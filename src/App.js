import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import { Icon, NavBar, SegmentedControl, WhiteSpace } from 'antd-mobile';
import AddNote from './components/AddNote';
import ListNotes from './components/ListNotes';
import alertaConfirm from './components/AlertaConfirm';


function App() {
  const [status, setStatus] = useState(false);
  const [lista,setLista] = useState([]);
  

  useEffect(()=>{
    const datos = localStorage.getItem('task-list');
    if(datos){
      setLista(JSON.parse(datos));
    }else
    localStorage.setItem('task-list','[]');
  },[])

  const onClose = () => {
    console.log('salir');
    alertaConfirm({
      title:'Salir',
      data:'Seguro de sair!!!',
      acept:'Salir',
      onAcept:()=>window.close(),
      cancel:'Cancelar',
    });
    
  }
  const selectSecment = (e) =>{

    console.log(e);
    setStatus(e==='listo');
  }
  const setNote = newNote =>{
    const new_list = [...lista,newNote];
    setLista(new_list);
    localStorage.setItem('task-list',JSON.stringify(new_list));
  }
  const updateNote = (note,index) => {
    const list = [...lista];
    list[index] = {...note};
    setLista(list);
    localStorage.setItem('task-list',JSON.stringify(list));
    
  }
  return (<div>

     <NavBar
      mode="dark"
      style={{background:'#00000080'}}
      leftContent="salir"
      onLeftClick={onClose}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >Tareas</NavBar>

    <div style={{
        position:'absolute',
        width:'calc( 100% - 20px )',
        height:'calc( 100% - 56px )',
        margin:'0 10px',
      }}>

      <WhiteSpace size='xl' />

      <SegmentedControl 
        values={['pendiente','listo']}
        onValueChange={selectSecment}
        tintColor='#00000060'
        selectedIndex={status ? 1 : 0}
        style={{fontSize:24,height:35}}
      />
      <WhiteSpace size='xl' />

      <AddNote set={setNote} />

      <ListNotes 
        updateNote={updateNote} 
        lista={lista} 
        status={status}
      />
    </div>

   </div>
  );
}

export default App;
