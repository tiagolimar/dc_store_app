export const Footer = () => {
    return (
        <footer className="mt-5 mb-4">
            <hr />
            <div className="d-flex justify-content-between align-items-center ms-4">
                <div>
                    <a href="https://github.com/tiagolimar" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-black">
                        GitHub
                    </a>{" "}|{" "}
                    <a href="https://www.linkedin.com/in/tiago-limar/" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
                        LinkedIn
                    </a>
                </div>
                <div>Tiago Lima</div>
                <div className="me-4">Última Atualização: 25/12/2023</div>
            </div>
        </footer>
    );
};
