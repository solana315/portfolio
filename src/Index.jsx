import React from "react";
import Header from "./components/Header";

export default function Index() {
	return (
		<div className="bg-primary-subtle min-vh-100 d-flex flex-column overflow-hidden">
			<Header />

			<main className="flex-grow-1 d-flex align-items-center justify-content-center overflow-hidden py-4" id="home">
				<div className="container-fluid px-4 px-lg-5 h-100 d-flex align-items-center justify-content-center">
					<div
						className="bg-white rounded-4 shadow-sm p-4 p-lg-5 w-100"
						style={{ height: "80vh" }}
					>
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
									Tenho conhecimentos sobre a criação de interfaces e o seu design UI/UX, usando JavaScript React e node.js,
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
					</div>
				</div>
			</main>
		</div>
	);
}
