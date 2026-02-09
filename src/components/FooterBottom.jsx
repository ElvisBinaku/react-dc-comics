import ButtonSignUp from './buttons/ButtonSignUp.jsx'
import SocialBar from './SocialBar.jsx'
export default function FooterBottom() {
    return (
        <section id="footer-bottom">
            <section className="d-flex container justify-content-between">
                <ButtonSignUp />
                <SocialBar />
            </section>
        </section>
    )

}