import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';

class Profile extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}

	onClick = () => {
		this.props.history.push('/messenger');
	}
	
	render() {
		const { t } = this.props;
		return (
			<div>
				<Grid columns={3}className='Grid'>
					<Grid.Row>
						<Grid.Column align='center' width={6}>
						</Grid.Column>
						<Grid.Column width={4}>
							<h1>{t('Placeholder')}</h1>
						</Grid.Column>
						<Grid.Column width={7}>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
export default withTranslation()(Profile);