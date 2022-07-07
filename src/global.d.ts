interface IState {
    token: string
}


interface IAction {
    type: string,
    payload: {
        token:string
    }
}

const initState: IState = {
    token: ""
}
