import jwt from 'jsonwebtoken';

export const verificaToken = (req, res, next) => {
	const bearerHeader = req.headers['authorization'];

	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];
		jwt.verify(bearerToken, 'clave_secreta', (error, authData) => {
			if (error) {
				res.sendStatus(403);
			} else {
				req.user = authData.user;
				next();
			}
		});
	} else {
		res.sendStatus(403);
	}
};