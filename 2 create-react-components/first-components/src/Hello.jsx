function Hello(){

    let myname="react"
    let number=42;
    let fullname=() =>{
        return 'rohit patel';
    }

    return <h3>
         messageNO:{number}hello this is function . this is {fullname()}
    </h3>
}

export default Hello;

