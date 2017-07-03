const users = (state = 'no', action) => {
	switch (action.type) {
		case 'START_LOGIN': {
			return 'waiting...';
		}

		case 'FINISH_LOGIN': {
			return 'logged in !';
		}
	}

	return state;
};

export default users;