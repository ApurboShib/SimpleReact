function Student(props) {
    return (
        <div>
            <h1>Here is the  Informations.</h1>
            <p>My name is : {props.name} </p>
            <p>Age is : {props.age} </p>
            <p>Bank Deposote is : {props.Deposite} </p>
            <p>My region is : {props.region} </p>
        </div>
    );
    
}
export default Student;