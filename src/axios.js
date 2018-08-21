import axios from "axios";

const instance = axios.create({
	baseURL: "https://behold-1575d.firebaseio.com/"
});

export default instance