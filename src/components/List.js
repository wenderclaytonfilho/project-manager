import Item from './Item'

function List(){
    
    return(
        <>
        <h1>My Games</h1>
        <ul>
            <Item title="God of War" publish_date={2018}/>
            <Item title="Red Dead Redemption" publish_date={2018}/>
            <Item title="Grand Theft Auto VI" publish_date={2025}/>
            <Item title="Minecraft" publish_date={2011}/>
            <Item/>
        </ul>
        </>
    )
}

export default List