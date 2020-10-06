import React , { useEffect, useState }from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className,customers, ...rest }) => {
  const classes = useStyles();
  const [textbox, setTextbox] = useState({ input: "" })
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add customer
        </Button>
      </Box> */}
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
              value={textbox.input}
              onChange={(e) => {
                var { name, value } = e.target;
                  setTextbox((prevState) => ({
                    ...prevState,
                    [name]: value,
                  }));
              }}
              name="input"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
              <Box mt={3}>
                <Results customers={customers} textbox={textbox.input} />
              </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
