export default class Branch {
	canvas = {
		ctx: null,
		width: null,
		height: null,
	}
	begin = {
		x: null,
		y: null
	}
	end = {
		x: null,
		y: null
	}
	length = null

	constructor(ctx, width, height, begin.x, begin.y, end.x, end.y, length) {
		this.canvas = {
			ctx, width, height
		}
		this.begin = {
			x: begin.x, y: begin.y
		}
		this.begin = {
			x: end.x, y: end.y
		}
		this.length = length
	}

	draw() {
    // draws current branch
		const ctx = this.canvas.ctx

	  ctx.beginPath()
    ctx.lineStyle = "white"
    ctx.lineWidth = branch.width
    ctx.moveTo(branch.begin.x, branch.begin.y)
    ctx.lineTo(branch.end.x, branch.end.y)
    ctx.stroke()
    ctx.closePath()
	
		// makes recursive

	}

}
