import './VoiceNavigationMannual.css'
export default function(){
    return(
        <>
        <div className="Mannual">
        <p>Please follow the instructions below while using it : </p>
        <div className="points">
            <ul>
                <li>Hit the 'Start Voice Navigation' button at the bottom right corner to activate voice commands.</li>
                <li>Say 'Home' to navigate to the Home page.</li>
                <li>Say 'About' to navigate to the About Me page.</li>
                <li>Say 'Projects' to navigate to the Projects page.</li>
                <li>Say 'Education' to navigate to the Education page.</li>
                <li>Say 'Contacts' to navigate to the Contact Me page.</li>
                <li>Say 'Enable Light Theme' to navigate to enable light mode.</li>
                <li>Say 'Enable Dark Theme' to navigate to enable dark mode.</li>
                <li>Say 'Stop Voice Navigation' to turn off voice navigation.</li>
            </ul>
        </div>
        </div>
        </>
    )
}