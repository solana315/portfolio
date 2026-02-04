import React, { useState } from "react";

const VALID_EMAIL = "ana@gmail.com";
const VALID_PASSWORD = "ana111";

export default function Login({ onLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!email.trim() || !password.trim()) {
			setError("Preencha email e palavra-passe.");
			return;
		}

		if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
			setError("Credenciais inválidas.");
			return;
		}

		localStorage.setItem("portfolio.auth", "true");
		setError("");
		onLogin();
	};

	return (
		<div className="bg-primary-subtle min-vh-100 d-flex align-items-center justify-content-center py-4">
			<div className="container px-4">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card shadow-sm border-0">
							<div className="card-body p-4">
								<h1 className="h4 fw-bold mb-1">Entrar</h1>
								<p className="text-muted mb-4">
									Faça login para aceder ao portfólio.
								</p>

								<form onSubmit={handleSubmit}>
									<div className="mb-3">
										<label className="form-label" htmlFor="loginEmail">
											Email
										</label>
										<input
											id="loginEmail"
											type="email"
											className="form-control"
											value={email}
											onChange={(event) => setEmail(event.target.value)}
											required
										/>
									</div>
									<div className="mb-3">
										<label className="form-label" htmlFor="loginPassword">
											Palavra-passe
										</label>
										<input
											id="loginPassword"
											type="password"
											className="form-control"
											value={password}
											onChange={(event) => setPassword(event.target.value)}
											required
										/>
									</div>

									{error ? (
										<div className="alert alert-danger py-2" role="alert">
											{error}
										</div>
									) : null}

									<button type="submit" className="btn btn-primary w-100">
										Entrar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
