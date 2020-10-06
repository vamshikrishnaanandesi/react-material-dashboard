import axios from 'axios';
import { config, config_url } from '../constants/constants.js';


export function getServiceWithOutParams(route) {
    return new Promise(function (resolved, rejected) {
        axios.get(config_url.API_BASE_URL + route, config).then(response => {
            resolved(response.data)
        }).catch(err => {
            rejected(err.response)
        })
    })

}

export function postService(route, obj) {
    return new Promise(function (resolved, rejected) {
        axios.post(config_url.API_BASE_URL + route, obj, config).then(response => {
            resolved(response)
        }).catch(err => {
            rejected(err)
        })
    })

}

export function postServiceWithParams(route, obj,params) {
    return new Promise(function (resolved, rejected) {
        axios.post(config_url.API_BASE_URL + route, obj, params,config).then(response => {
            resolved(response)
        }).catch(err => {
            rejected(err)
        })
    })

}

export function getServiceWithParams(route, obj) {
    return new Promise(function (resolved, rejected) {
        axios.get(config_url.API_BASE_URL + route, obj, config).then(response => {
            resolved(response)
        }).catch(err => {
            rejected(err)
        })
    })

}