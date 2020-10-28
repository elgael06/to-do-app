import CardNota from './CardNota';

export default function ListNotes({
    lista=[],
    updateNote=(note,index) =>null,
    status=false,
    onDelete=e=>e
}){

    const cambioStatus = (status,index) => {
        console.log('cambio status');
         const dato = lista[index];
         dato.status = !status;
        updateNote(dato,index);
    }

    return (
        <div style={{
            height:'calc( 100% - 200px )',
            margin:'10px 0',
            overflow:'auto',
            width:'calc( 100% - 10px) ',
            maxWidth:550
          }}>

            {lista.map((item,index)=>({
                ...item,
                onDelete:()=>onDelete(index),
                onChange:()=>cambioStatus(item.status,index)
            })).filter(e=>e.status===status)
            .map((item,index)=>(<CardNota 
                item={item} 
                key={index} 
                onDelete={item.onDelete}
            />))}
        </div>
    );
}