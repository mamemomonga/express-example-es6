// vim:ft=javascript

export function idE(name) {
	return document.getElementById(name)
}

export function idShow(name) {
	idE(name).style.display=''
}
export function idHide(name) {
	idE(name).style.display='none'
}
export function idDisable(name) {
	idE(name).disabled='true'
}
export function idEnable(name) {
	idE(name).disabled=''
}

export class eventsController {
	constructor() {
		this.events=[]
	}	
	regist(id,type,func) {
		idE(id).addEventListener(type, func, false)
		this.events.push( [id, type, func] )
	}
	clear() {
		while(this.events.length > 0) {
			const eva=this.events.shift()
			idE(eva[0]).removeEventListener(eva[1],eva[2], false)
		}
	}
}
