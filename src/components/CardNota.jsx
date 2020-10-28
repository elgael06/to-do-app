import { ActivityIndicator, Card, Icon, Switch, WhiteSpace } from "antd-mobile";
import CardBody from "antd-mobile/lib/card/CardBody";
import CardFooter from "antd-mobile/lib/card/CardFooter";
import CardHeader from "antd-mobile/lib/card/CardHeader";
import { useState } from "react";

const CardNota = ({item={
        onChange:()=>null,
        title:'',
        status:false,
        data:'',
    },
    onDelete=e=>e
}) => {
    const [indicador,setIndicador] = useState(false);
    const handleChange = () => {
        setIndicador(true);
        setTimeout(()=>{
            item.onChange();
            setIndicador(false);
        },500);
    }
    const Indicador = <div style={{width: '20px',float:' right'}}><ActivityIndicator /></div>;
    return(<div>
        <Card color='#ffffff' >
            <CardHeader 
                title={item.title}
                extra={<Icon type='cross-circle' color='orange' onClick={onDelete}/>}
            />
            <CardBody>
                <p aria-multiline>{item.data}</p>
            </CardBody>
            <CardFooter extra={
                 indicador ? Indicador : <Switch 
                 platform='android'
                onChange={handleChange}
                checked={item.status}
                color='#8bc34a'
            />
            }>

            </CardFooter>
        </Card>
        <WhiteSpace size='sm'/>
   </div>);
}

export default CardNota;