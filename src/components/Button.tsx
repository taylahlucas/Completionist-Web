import * as React from 'react';

interface ButtonProps {
	title: string;
	href?: string;
	onPress: () => void;
}

const iconStyle = {
	paddingRight: 8,
	alignSelf: 'center'
}

const Button = ({ title, href, onPress }: ButtonProps) => (
	<div style={{ display: 'inline-block', padding: 6, flexShrink: 0 }}>
	<div className="button row" onClick={onPress}>
		<h3 className="buttonTitle heading-light">{title}</h3>
		{href && <img style={iconStyle} src={href} color='white' width={30} height={30} />}
	</div>
	</div>
);

export default Button;