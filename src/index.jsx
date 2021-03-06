// jquery is required for bootstrap
import $ from 'jquery'
// bootstrap
import 'bootstrap'
// Globally import the bootstrap css;
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/ap-react-bootstrap.scss';
// React modules;
import React from 'react';
import { render } from 'react-dom';
// Import Actions;
import AppActions from 'actions/AppActions';
// Import Stores;
import AppStore from 'stores/AppStore';
// Import Boot;
import boot from 'boot';
// Our root component handling routing in the application;
import Routes from 'components/Routes';
import { AppRouter } from 'lib/exports';
render((<AppRouter routes={Routes}/>), document.getElementById('app'));
