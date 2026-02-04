import React from "react";

export default function Index() {
	return (
		<div className="bg-light min-vh-100">
			<header className="bg-white border-bottom">
				<nav className="navbar navbar-expand-lg container py-3">
					<a
						className="navbar-brand fw-semibold d-flex align-items-center gap-2"
						href="#"
					>
						<span
							className="bg-secondary-subtle border rounded-circle d-inline-block"
							style={{ width: 40, height: 40 }}
							aria-hidden="true"
						/>
						Ana Carolina Oliveira
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#mainNav"
						aria-controls="mainNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="mainNav">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" href="#home">
									Início
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#sobre">
									Sobre
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projetos">
									Projetos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contato">
									Contato
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<main className="container py-5" id="home">
				<div className="row align-items-center g-4">
					<div className="col-12 col-lg-6">
						<p className="text-uppercase text-primary fw-semibold mb-2">
							Portfólio
						</p>
						<h1 className="display-5 fw-bold mb-3">
							Designer UI/UX
							<br />
							Designer Gráfico
							<br />
							Desenvolvedora web
						</h1>
						<p className="lead text-muted mb-4">
							Sou capaz de criar interfaces e o seu design UI/UX, usando JavaScript React e node.js,
                            também designs como criação de cartazes gestão de redes 
                            sociais e Logotipos 
						</p>
						<div className="d-flex flex-wrap gap-3">
							<a className="btn btn-primary btn-lg" href="#projetos">
								Ver projetos
							</a>
							<a className="btn btn-outline-secondary btn-lg" href="#sobre">
								Conheça minha trajetória
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card shadow-sm border-0">
							<div className="card-body p-4">
								<h2 className="h5 fw-semibold mb-3">Disponível para:</h2>
								<ul className="list-unstyled mb-0">
									<li className="d-flex align-items-center mb-2">
										<span className="badge bg-primary-subtle text-primary me-2">
											UI
										</span>
										Design de interfaces
									</li>
									<li className="d-flex align-items-center mb-2">
										<span className="badge bg-primary-subtle text-primary me-2">
											UX
										</span>
										Estratégia e pesquisa
									</li>
									<li className="d-flex align-items-center">
										<span className="badge bg-primary-subtle text-primary me-2">
											Web
										</span>
										Desenvolvimento front-end e JavaScript
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
