import * as React from "react";

import { AppBar, Button, Toolbar } from "@material-ui/core";

import { Link } from "react-router-dom";
import theme from "../theme";

const subNavStyles: React.CSSProperties = {
	backgroundColor: theme.palette.primary.dark,
};

const toolbarStyles: React.CSSProperties = {
	justifyContent: "center",
};

const subNav: React.SFC = () => (
	<AppBar position="static" color="primary" style={subNavStyles}>
		<Toolbar style={toolbarStyles}>
			<Button component={createButtonLink("/test")} color="inherit">
				Test
			</Button>
		</Toolbar>
	</AppBar>
);

export default subNav;

function createButtonLink(to: string): React.SFC {
	return props => <Link to={to} {...props} />;
}
