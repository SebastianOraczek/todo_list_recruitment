import { withRouter } from "react-router";

import { deleteUser } from "../utils/localStorage";

import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/NavbarStyles";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar(props) {
    const { classes, history } = props;

    const logout = () => {
        deleteUser();
        history.push("/login");
    };

    return (
        <div>
            <p className={classes.text}>ToDo-List</p>
            {window.localStorage && window.localStorage.user.length > 1 &&
                (
                    <IconButton onClick={logout} className={classes.logout}>
                        <ExitToAppIcon className={classes.logoutIcon} />
                    </IconButton>
                )}
        </div>
    );
};

export default withStyles(styles)(withRouter(Navbar));