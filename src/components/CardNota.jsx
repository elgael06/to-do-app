import { ActivityIndicator, Card, Checkbox, Switch, WhiteSpace } from "antd-mobile";
import CardBody from "antd-mobile/lib/card/CardBody";
import CardHeader from "antd-mobile/lib/card/CardHeader";
import { useState } from "react";

const CardNota = ({item={
    onChange:()=>null,
    title:'',
    status:false,
    data:'',
}}) => {
    const [indicador,setIndicador] = useState(false);
    const handleChange = () => {
        setIndicador(true);
        setTimeout(()=>{
            item.onChange();
            setIndicador(false);
        },500);
    }
    const Indicador = <div style={{width: '20px',float:' right'}}><ActivityIndicator /></div>;
    return(<div >
        <Card color='#ffffff'>
            <CardHeader 
                title={item.title}
                extra={indicador ? Indicador :<Switch 
                    platform='android'
                   onChange={handleChange}
                   checked={item.status}
               />}
            />
            <CardBody>
                {item.data}
            </CardBody>
        </Card>
        <WhiteSpace size='sm'/>
   </div>);
}

export default CardNota;