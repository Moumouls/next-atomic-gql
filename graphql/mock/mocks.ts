import { name, image } from 'faker'

export const mocks = {
	User: () => ({
		firstname: name.firstName(),
		lastname: name.lastName(),
		picture: () => ({ name: 'xxxx', url: image.avatar() }),
	}),
}
