import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 300,
	},
});

const Error = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Typography variant='h1' className={classes.title}>
				500
			</Typography>
		</section>
	);
};

export default Error;
