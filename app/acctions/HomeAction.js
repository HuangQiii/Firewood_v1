'use strict';
import * as types from '../constants/HomeTypes';

const PRE_ORG = new Array(20).fill('Hello');
const LATEST_OPEN = ['B', 'C', 'E'];
const LIST_ARRAY = [
    { name: 'AA', icon: 'md-home' },
    { name: 'BB', icon: 'md-eye' },
    { name: 'CC', icon: 'md-briefcase' },
    { name: 'DD', icon: 'md-contact' },
    { name: 'EE', icon: 'md-settings' },
    { name: 'FF', icon: 'md-home' },
    { name: 'GG', icon: 'md-eye' },
    { name: 'HH', icon: 'md-briefcase' },
    { name: 'II', icon: 'md-contact' },
    { name: 'JJ', icon: 'md-settings' },
];
const PRE_PRO = ['A', 'B', 'C', 'D', 'E', 'F'];
let ARRAY_TEMP = [];

export function getMessage() {
    return dispatch => {
        dispatch(getUserMessage());
        dispatch(getBundles());
        dispatch(getLatestProjects());
        dispatch(getCurrent());
        dispatch(getOrganizations());
    }
}

function getUserMessage() {
    return {
        type: types.GET_USER_MESSAGE,
    }
}

function getBundles(bundles) {
    return {
        type: types.GET_BUNDLES,
        bundles: LIST_ARRAY
    }
}

function getLatestProjects(latest) {
    ARRAY_TEMP = LATEST_OPEN.concat();
    return {
        type: types.GET_LATEST_OPEN,
        latest: LATEST_OPEN
    }
}

function getCurrent() {
    return {
        type: types.GET_CURRENT,
    }
}

function getOrganizations(organizations) {
    return {
        type: types.GET_ORGANIZATIONS,
        organizations: PRE_ORG
    }
}

export function changeOrganizationShow() {
    return {
        type: types.CHANGE_ORG_SHOW,
    }
}

export function selectOrganization(organization) {
    return {
        type: types.SELECT_ORGANIZATION,
        organization: organization
    }
}

export function selectProject(project) {
    const pos = ARRAY_TEMP.indexOf(project);
    if (pos === -1) {
        ARRAY_TEMP.unshift(project);
        ARRAY_TEMP = ARRAY_TEMP.splice(0, 4);
        return {
            type: types.SELECT_PROJECT_NEW,
            project: project,
            latest: ARRAY_TEMP
        }
    } else if (pos === 0) {
        return {
            type: types.SELECT_PROJECT_FIRST,
            project: project,
        }
    } else {
        ARRAY_TEMP.splice(pos, 1);
        ARRAY_TEMP.unshift(project);
        return {
            type: types.SELECT_PROJECT_REST,
            project: project,
            latest: ARRAY_TEMP
        }
    }
}

export function selectList(list) {
    return dispatch => {
        dispatch(downloadingList(list));
        setTimeout(() => {
            dispatch(removeDownloadingList(list));
        }, 5000);
    }
}
function downloadingList(list) {
    return {
        type: types.SELECT_LIST_DOWNLOADING,
        list: list
    }
}
function removeDownloadingList(list) {
    return {
        type: types.REMOVE_LIST_DOWNLOADING,
        list: list
    }
}

export function getProjects() {
    return dispatch => {
        dispatch(getProjectsIng());
        setTimeout(() => {
            dispatch(getProjectsSuccess(PRE_PRO));
        }, 5000);
    }
}

function getProjectsIng() {
    return {
        type: types.GET_PROJECTS_ING
    }
}

function getProjectsSuccess(projects) {
    return {
        type: types.GET_PROJECTS_Success,
        projects: projects
    }
}