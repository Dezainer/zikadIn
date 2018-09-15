import RequestHelper from 'requestHelper'

let subscribers = []
const nameOnStorage = 'zikadIn:USER'

const login = user => {
	return RequestHelper.post('/login', user).then(userData => {
		localStorage.setItem(nameOnStorage, JSON.stringify(user))
		alertSubscribers()
	})
}

const logoff = () => {
	localStorage.removeItem(nameOnStorage)
	alertSubscribers()
}

const subscribe = (callback) => {
	subscribers.push(callback)
	alertSubscribers()
	
	return () => unsubscribe(subscribers.length - 1)
}

const unsubscribe = (index) => {
	subscribers.splice(index, 1)
}

const alertSubscribers = () => {
	subscribers.map(callback => callback(getUser()))
}

const getUser = () => {
	return JSON.parse(localStorage.getItem(nameOnStorage))
}

export default { login, logoff, subscribe, getUser }