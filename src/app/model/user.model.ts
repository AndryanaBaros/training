//#region IMPORT

import { ResponseModel } from './response.model';
// import { ValidationFunction } from '../function/validation';

//#endregion


//#region CLASS

export class UserModel {
	ID?: number;
	Email?: string;
	Password?: string;
	FirstName?: string;
	MiddleName?: string;
	LastName?: string;
	FullName?: string;
	BirthDate?: Date;
	stringBirthDate?: string;
	BirthPlace?: string;

	//#region FUNCTION

	// validateEmail(stringEmail: string): ResponseModel {
	// 	const modelRespon: ResponseModel = new ResponseModel();
	// 	// modelRespon.setForValidation('User')

	// 	const regulerExpression: RegExp = new RegExp("[a-zA-Z0-9\\+\\\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+");

	// 	if (this.Email == null || this.Email === undefined || this.Email === "") {
	// 		modelRespon.MessageContent = "Email cannot be empty";
	// 	}
	// 	else if (regulerExpression.test(this.Email)) {
	// 		modelRespon.MessageContent = "Form is Filled Correctly"
	// 		modelRespon.State = 4
	// 	}
	// 	else {
	// 		modelRespon.MessageContent = "Enter a valid email"
	// 	}
	// 	return modelRespon;
	// }

	//#endregion

}

//#endregion