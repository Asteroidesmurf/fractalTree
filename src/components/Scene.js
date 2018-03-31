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

	updateCanvas(width, height) {
    this.canvas.width = width
    this.canvas.height = height
    this.draw()
	}

	draw() {
		this.canvas.ctx.fillStyle = "grey"
		this.canvas.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

		/** 
		creates a new branch,
		accepts params: ctx, begin X, begin Y, length, width, angle
		**/
		this.tree.push(new Branch(
			this.canvas.ctx,
			this.canvas.width / 2,
			this.canvas.height,
			this.length,
			10,
			1
		))

		for (let i = 0; i < 50000; i++){
	    if(this.tree[i].branchLength > 1) {
		    this.tree.push(this.tree[i].branchOut()[0])
		    this.tree.push(this.tree[i].branchOut()[1])
		    this.tree[i].draw()
	  	}
	  }


	}
}