import Card1 from './black'
import Card2 from './white'
const Block=()=>{
    let list=[];
    let count=0;
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if(i%2===0){
            list.push(<Card1 key={count}/>)}
            else
            list.push(<Card2 key={count}/>)
            count++;
        }
    }
    return list;
}
export default Block;
