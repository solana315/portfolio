import React from "react";
import profileImg from "../assets/img.jpeg";

export default function Header({ onLogout }) {
	return (
		<header className="bg-white border-bottom">
			<nav className="navbar navbar-expand-lg container py-3">
				<a
					className="navbar-brand fw-semibold d-flex align-items-center gap-2"
					href="/"
				>
					<img
						src={profileImg}
						alt="Foto de perfil de Ana Carolina Oliveira"
						className="border rounded-circle"
						style={{ width: 40, height: 40, objectFit: "cover" }}
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
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Início
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/sobre">
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
						{onLogout ? (
							<li className="nav-item ms-lg-3 d-flex align-items-center">
								<button
									type="button"
									className="btn btn-outline-primary btn-sm"
									onClick={onLogout}
								>
									Sair
								</button>
							</li>
						) : null}
					</ul>
				</div>
			</nav>
		</header>
	);
}
