export default function DisplaySimple({emails}){

    
    return (
        emails.map((email, index) => <li key="index">{email.sender} {email.subject}</li>)      
        )

}