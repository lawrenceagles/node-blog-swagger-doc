import express from "express";
import axios from "axios";

const router = express.Router();
const baseURL = 'https://jsonplaceholder.typicode.com';


router.get("/", async (req, res) => {
	const response = await axios({
		method: 'get',
		baseURL,
		url: '/posts',
	})
	console.log("response is", response.data)
	res.send({ status: "Successful", data: response.data })

});


router.post("/", async (req, res) => {
	const { data } = await axios({
		method: 'post',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		data: JSON.stringify(req.body),
		baseURL,
		url: `/posts`,
	});

	res.send({ status: "Successful", data })
});


router.get("/:id", async (req, res) => {
	const userID = req.params.id || '';

	const { data } = await axios({
		method: 'get',
		baseURL,
		url: `/posts/${userID}`,
	})

	res.send({ status: "Successful", data })
});


router.put("/:id", async (req, res) => {
	const userID = req.params.id || '';

	const { data } = await axios({
		method: 'put',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		data: JSON.stringify(req.body),
		baseURL,
		url: `/posts/${userID}`,
	})

	res.send({ status: "Successful", data })
});

router.delete("/:id", async (req, res) => {
	const userID = req.params.id || '';

	await axios({
		method: 'delete',
		baseURL,
		url: `/posts/${userID}`,
	})

	res.send({ status: "Successful", message: "Data deleted!" })
});

export default router;
