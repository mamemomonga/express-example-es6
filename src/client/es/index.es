// vim:ft=javascript

import {
	escapeHTML,
	appendLog,
	idE,
	idShow,
	idHide,
	idDisable,
	idEnable,
	eventsController,
} from './ui_utils.es'

class Index {
	constructor() {
		console.log('INDEX constructor')
	}
	run() {
		console.log('INDEX run')
		idE('content1').innerHTML='THE CONTENT1'
		idShow('content1')
	}
}

document.addEventListener('DOMContentLoaded',()=>{
	new Index(window).run()
})
