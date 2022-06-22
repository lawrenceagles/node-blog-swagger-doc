export default {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Express Blog CRUD API with Swagger",
			version: "0.1.0",
			description:
				"This is a simple jsonplaceholder CRUD Blog API application made with Express and documented with Swagger",
			license: {
				name: "MIT",
				url: "https://spdx.org/licenses/MIT.html",
			},
			contact: {
				name: "John Doe",
				url: "https://jsonplaceholder.typicode.com/",
				email: "info@email.com",
			},
		},
		servers: [
			{
				url: "http://localhost:5000/posts",
			},
		],
	},
	apis: ["./routes/index.js"],
};
