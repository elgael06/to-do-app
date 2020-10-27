import CardNota from './CardNota';

export default function ListNotes({
    lista=[],
    updateNote=(note,index) =>null,
    status=false
}){

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

            {lista.map((item,index)=>({
                ...item,
                onChange:()=>cambioStatus(item.status,index)
            })).filter(e=>e.status===status)
            .map((item,index)=>(<CardNota 
                item={item} 
                key={index} 
            />))}
        </div>
    );
}