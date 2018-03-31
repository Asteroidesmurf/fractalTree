import { numberBetween } from './Utillities'

export default class Branch {
	ctx = null
	begin = {
		x: null,
		y: null
	}
	end = {
		x: null,
		y: null
	}
	branchLength = null
	branchWidth = null

	constructor(ctx, x, y, length, width, angle) {
		this.ctx = ctx
		this.begin = {x, y}
		this.branchLength = length
		this.branchWidth = width
		this.angle = angle
		this.end = this.calculateEnd(this.begin, this.angle, this.branchLength)
	}

	calculateEnd(begin, angle, length) {
    let toX = begin.x + Math.sin(angle * (Math.PI/180)) * -length
    let toY = begin.y + Math.cos(angle * (Math.PI/180)) * -length
    return {x: toX, y: toY}
	}

	branchOut() {
		const newRAngle = numberBetween(10, 45) + this.angle 
		const newLAngle = numberBetween(-10, -45) + this.angle

		const right = new Branch(this.ctx, this.end.x, this.end.y, this.branchLength * .8, this.branchWidth * .8, newRAngle)
		const left = new Branch(this.ctx, this.end.x, this.end.y, this.branchLength * .8, this.branchWidth * .8, newLAngle)
		return [right, left]
		console.log
	}

	draw() {
		const ctx = this.ctx
		this.branchLength > 12 ? ctx.strokeStyle = "#421f1f" : ctx.strokeStyle = "#4cdb4c"
	  ctx.lineWidth = this.branchWidth
	  ctx.beginPath()
	  ctx.lineCap = "round"
	  ctx.moveTo(this.begin.x, this.begin.y)
	  ctx.lineTo(this.end.x, this.end.y)
	  ctx.stroke()


	}

}
