import Posts from "./posts.js"

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
 *     postObj:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Shows the status of the request
 *          example: successful
 *        data:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *              description: Post ID.
 *              example: 1
 *            userid:
 *              type: integer
 *              description: Author ID.
 *              example: 1
 *            title:
 *              type: string
 *              description: Post title.
 *              example: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
 *            body:
 *              type: string
 *              description: Post body.
 *              example: quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
 *     Message:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Shows the status of the request
 *          example: successful
 *        message:
 *          type: string
 *          description: Delete message
 *          example: Data deleted!
 */

/**
 * @swagger
 * paths:
 *   /posts/:
 *     get:
 *       summary: fetch blog posts from JSONPlaceholder.
 *       description: Returns a list of all blog posts from JSONPlaceholder.
 *       responses:
 *         200:
 *           description: A list of blog posts.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Post'
 *     post:
 *       summary: Create a JSONPlaceholder blog Post.
 *       responses:
 *         201:
 *           description: Newly created blog post.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Post'
 *   /posts/{id}:
 *     get:
 *       summary: Fetch a blog post from JSONPlaceholder.
 *       description: Returns a blog post object.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the blog post to fetch.
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: A single blog post.
 *           content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/postObj'
 *     put:
 *       summary: Update a JSONPlaceholder blog post.
 *       description: Returns an updated blog post. 
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the blog post to update.
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description:  Updated blog post.
 *           content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/postObj'
 *     delete:
 *       summary: Delete a JSONPlaceholder blog post.
 *       description: Returns a message for the delete operation. 
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the blog post to delete.
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: An object with status and message properties.
 *           content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Message'
 */

export { Posts }; 