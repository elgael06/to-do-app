

const Container = ({children}) => {

    return(<div style={{
        position:'absolute',
        width:'calc( 100% - 20px )',
        height:'calc( 100% - 56px )',
        margin:'0 10px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }}>{children}</div>);
}

export default Container;