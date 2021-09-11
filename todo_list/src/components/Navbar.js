import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/NavbarStyles";

function Navbar(props) {
    const { classes } = props;

    return (
        <div>
            <h1 className={classes.text}>ToDo-List</h1>
        </div>
    );
};

export default withStyles(styles)(Navbar);