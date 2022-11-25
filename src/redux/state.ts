export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
//profile
export type ProfilePageType = {
    posts: Array<PostType>
}
export type PostType = {
    id: number, message: string, likesCount: number
}

//dialogs
export type DialogsPageType={
    dialogs:Array<DialogItemType>
    messages: Array<MessageType>
}
export type DialogItemType = {
    id:number
    name:string
}
export type MessageType = {
    id: number
    message: string
}



export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you ?', likesCount: 15},
            {id: 1, message: 'I\'m fine', likesCount: 11},
            {id: 1, message: 'and you?', likesCount: 5},
            {id: 1, message: 'and you?', likesCount: 5},
            {id: 1, message: 'and you?', likesCount: 5},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nina'},
            {id: 2, name: 'Vova'},
            {id: 3, name: 'Ilya'},
            {id: 4, name: 'Vlad'},
        ],
        messages: [
            {id: 1, message: 'Hello everyone !'},
            {id: 2, message: 'How are you ?'},
            {id: 3, message: 'Hello !!!'},
        ],
    },
    // sidebar: {}
}







