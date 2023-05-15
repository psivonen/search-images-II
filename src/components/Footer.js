import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid className="bg-light fixed-bottom">
            <footer className="pt-3">
                <p className="text-center text-muted">&copy; 2023 Search Images. 
                Photos from <a href="https://unsplash.com/?utm_source=Search_images&utm_medium=referral">Unsplash</a>, using Unsplash API.</p>
            </footer>
        </Container>
    )
}

export default Footer;