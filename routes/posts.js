import express from "express";
import axios from "axios";

const router = express.Router();
const baseURL = 'https://jsonplaceholder.typicode.com';

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Shows the status of the request
 *          example: successful
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                description: Post ID.
 *                example: 1
 *              userid:
 *                type: integer
 *                description: Author ID.
 *                example: 1
 *              title:
 *                type: string
 *                description: Post title.
 *                example: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
 *              body:
 *                type: string
 *                description: Post body.
 *                example: quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder posts.
 *     description: Retrieve a list of posts from JSONPlaceholder. Can be used to populate a list of fake posts when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *              $ref: '#/components/schemas/Post'
 */
router.get("/", async (req, res) => {
	const { data } = await axios({
		method: 'get',
		baseURL,
		url: '/posts',
	})

	res.send({ status: "Successful", data })

});


/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *              $ref: '#/components/schemas/Post'
*/
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

/**
* @swagger
* /posts/{id}:
*   get:
*     summary: Retrieve a single JSONPlaceholder user.
*     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Numeric ID of the user to retrieve.
*         schema:
*           type: integer
*     responses:
*       200:
*         description: A single user.
*         content:
*           application/json:
*              $ref: '#/components/schemas/Post'
*/
router.get("/:id", async (req, res) => {
	const userID = req.params.id || '';

	const { data } = await axios({
		method: 'get',
		baseURL,
		url: `/posts/${userID}`,
	})

	res.send({ status: "Successful", data })
});

/**
* @swagger
* /posts/{id}:
*   put:
*     summary: Update a single JSONPlaceholder user.
*     description: Update a single JSONPlaceholder user. 
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Numeric ID of the user to update.
*         schema:
*           type: integer
*     responses:
*       200:
*         description: A single user.
*         content:
*           application/json:
*              $ref: '#/components/schemas/Post'
*/
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

/**
* @swagger
* /posts/{id}:
*   delete:
*     summary: Delete a single JSONPlaceholder user.
*     description: Delete a single JSONPlaceholder user. 
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Numeric ID of the user to delete.
*         schema:
*           type: integer
*     responses:
*       200:
*         description: A single user.
*         content:
*           application/json:
*              $ref: '#/components/schemas/Post'
*/
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
