import Posts from "./posts.js"

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