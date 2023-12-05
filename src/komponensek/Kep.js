export default function Kep(props) {

    function kattintasKezeles() {
        //console.log(props.index);
        props.kattintasKezeles(props.index);
    }

    return (
        <div className="kep" onClick={kattintasKezeles}>
           <img src={props.src} alt=""/>           
        </div>
    )

}