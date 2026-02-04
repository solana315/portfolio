import React from "react";
import profileImg from "./assets/img2.jpeg";
import clipImg from "./assets/clip.png";
import Header from "./components/Header";

export default function Sobre() {
	const birthDate = new Date(2005, 0, 3);
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const hasHadBirthdayThisYear =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() &&
			today.getDate() >= birthDate.getDate());
	if (!hasHadBirthdayThisYear) {
		age -= 1;
	}

	return (
		<div className="bg-primary-subtle min-vh-100 d-flex flex-column overflow-hidden">
			<Header />
			<main className="flex-grow-1 d-flex align-items-center justify-content-center overflow-hidden py-4">
				<div className="container-fluid px-4 px-lg-5 h-100 d-flex align-items-center justify-content-center">
					<div
						className="bg-white rounded-4 shadow-sm p-4 p-lg-5 w-100"
						style={{ height: "80vh" }}
					>
						<div className="row align-items-center g-4 h-100">
							<div className="col-12 col-lg-6 d-flex">
								<div className="d-flex flex-column justify-content-center">
								<h1 className="fw-bold display-4 text-dark mb-3">
									Sobre o meu percurso a
								</h1>
								<p className="text-muted mb-0">
									Sou a Ana Oliveira tenho {age} anos, cursei <strong>Tecnologias e Design Multimédia</strong> no
									<strong> IPV</strong> (Instituto Politécnico de Viseu), na
									<strong> ESTGV </strong>( Escola Superior de Tecnologias e Gestão de Viseu).<br/>
									<br />
									Durante o meu percurso desenvolvemos diversos websites para entidades
									promotoras que a escola nos dava, nomeadamente usando JavaScript e Node.js.
									<br />
									Quanto ao design, aprendemos também a gerir redes sociais, criar posts, logotipos
                                    e animações e fiz também um estágio de design na empresa Febo no qual fazia tudo isso.
                                
								</p>
							</div>
						</div>
							<div className="col-12 col-lg-6 text-lg-end">
								<div className="position-relative d-inline-block ms-lg-auto">
									<div
										className="bg-white border rounded-4 p-2 shadow"
										style={{ transform: "rotate(-2deg)" }}
									>
										<img
											src={profileImg}
											alt="Foto de Ana"
											className="img-fluid rounded-3"
											style={{ width: "100%", maxWidth: 420 }}
										/>
									</div>
									<img
										src={clipImg}
										alt="Clip"
										className="position-absolute top-0 end-0"
										style={{
											width: 44,
											transform: "translate(10%, -35%) rotate(8deg)",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
