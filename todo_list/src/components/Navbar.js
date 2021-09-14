import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/NavbarStyles";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar(props) {
    const { classes, history } = props;

    const logout = () => {
        window.localStorage.clear();
        history.push("/login");
    };
    return (
        <div>
            <p className={classes.text}>ToDo-List</p>
            {window.localStorage.length >= 1
                &&
                (
                    <IconButton onClick={logout} className={classes.logout}>
                        <ExitToAppIcon className={classes.logoutIcon} />
                    </IconButton>
                )
            }
        </div>
    );
};

export default withStyles(styles)(withRouter(Navbar));