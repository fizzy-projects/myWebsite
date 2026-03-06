export const Footer: React.FC = ()=>{
    return(
    <footer className="footer">
        <div className="footer-content">
            <p className="footer-text">
            Crafted with precision and curiosity. Always learning, always questioning.
            </p>
            <div className="footer-contacts">
                {/* <a href="#" className="footer-link">GitHub</a> */}
                <a href="https://www.linkedin.com/in/muhammad-hafiz-bin-mohd-aziz-6274991ab/" className="footer-contacts-link">LinkedIn</a>
                <p id="email" className="footer-contacts-text">Contact me at mmhafiz@gmail.com</p>
            </div>
        </div>
    </footer>
    )
}