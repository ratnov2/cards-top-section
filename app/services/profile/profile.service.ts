import { instance } from "@/api/interceptors"
import { getUsersUrl } from "@/config/api.config"
import { IProfile } from "@/shared/types/profile.interface"

export const ProfileService = {
	async getProfile() {
		return instance.get<IProfile>(getUsersUrl('/profile'))
	}
}