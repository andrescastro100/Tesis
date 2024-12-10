import './index.css';

export default function Parragraph({title}){
    return(
        <section className='parragraph-container'>
            <p className="parragraph">«{title}»</p>
        </section>
    )
}