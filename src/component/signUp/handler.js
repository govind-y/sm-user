import axios from "axios";
import { BASE_API_URL, header } from "../../constant/api";
import { toast } from "react-toastify";

export const postSignUpApi = async (state, roomDetail) => {
	const payload = handlePayload(state, roomDetail);
	axios
		.post(`${BASE_API_URL}open/store`, payload, header)
		.then((response) => {
			console.log(response.data);
			toast.success("Register successfully")
		}).catch(err => {
			console.log(err)
			toast.error(err.message)
		});
}
export const handlePayload = (state, roomDetail) => {
	let arrObj = []
	state.noOfRooms && Array.from({ length: state.noOfRooms }, (v, i) => {
		let columnInRoom = roomDetail[`columnInRoom${i + 1}`]
		let floorInRoom = roomDetail[`floorInRoom${i + 1}`]
		return arrObj.push({ roomNo: i + 1, floorInRoom, columnInRoom })
	})
	return { ...state, roomDetails: arrObj }
}