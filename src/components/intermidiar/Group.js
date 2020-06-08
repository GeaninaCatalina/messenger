import React, { Component } from 'react';
import './Group.css';
import { Button, Grid } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

class Group extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}

	onClickGlobal = () => {
		this.props.history.push('/global');
	}
	

	onClickFriends = () => {
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
							<Button className='openButton' color='yellow' size='big' onClick={this.onClickGlobal}>{t('group_global')}</Button>
							<Button className='openButton' color='yellow' size='big' onClick={this.onClickFriends}>{t('group_friends')}</Button>
						</Grid.Column>
						<Grid.Column width={7}>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
export default withTranslation()(Group);