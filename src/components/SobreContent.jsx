import React from "react";
import profileImg from "../assets/img2.jpeg";
import clipImg from "../assets/clip.png";

export default function SobreContent() {
	return (
		<div className="container-fluid px-4 px-lg-5 h-100">
			<div
				className="bg-white rounded-4 shadow-sm p-4 p-lg-5"
				style={{ height: "80vh" }}
			>
				<div className="row align-items-center g-4 h-100">
					<div className="col-12 col-lg-6">
						<h1 className="fw-bold display-4 text-dark mb-3">Sou a Ana</h1>
						<p className="text-muted mb-0">L.</p>
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
	);
}