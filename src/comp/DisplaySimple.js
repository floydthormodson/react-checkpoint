export default function DisplaySimple({emails}){

    
    return (
        emails.map((email, index) => <button key="index">{email.sender} {email.subject}</button>)      
        )

}