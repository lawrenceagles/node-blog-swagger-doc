
import express from "express";
import bodyParser from 'body-parser';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import Posts from "./routes/posts.js"
import specOpts from "./specOptions.js"

const port = process.env.PORT || 5000;
const swaggerSpec = swaggerJsdoc(specOpts);
const app = express();

// use body-parser
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// use body-paser-json
app.use(bodyParser.json());

app.use("/posts", Posts);

app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(swaggerSpec, { explorer: true })
);


// start server
app.listen(port, () => console.log(`Server is running at port ${port}`));
