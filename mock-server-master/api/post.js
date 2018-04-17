// post router
export default {
	'get /postjson': () => ({
		"post|1-10": [{
			title: "@title"
		}]
	}),
	'get /postjson/:id': param => ({
		id: param.id,
		title: "@title",
		content: "@paragraph"
	})
}