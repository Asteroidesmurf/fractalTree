import Branch from './Branch'

export default class Scene {
	canvas = {
		ctx: null,
		width: null,
		height: null,
	}
	tree = []
	length = null

	constructor(ctx, width, height) {
		this.canvas = {
			ctx, width, height
		}
		this.length = 100

	}

	draw() {
		this.canvas.ctx.fillStyle = "grey"
		this.canvas.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

		this.tree.push(new Branch(
			this.canvas.ctx, 
			this.canvas.width, 
			this.canvas.height, 
			this.canvas.width / 2,
			this.canvas.height,
			this.canvas.width /2,
			this.canvas.height - 100,
			this.length))
		this.tree.foreach(branch => {
			branch.draw()
		}

		})
	}
}