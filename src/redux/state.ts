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
    img:string
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
            {id: 1, name: 'Nina', img: 'https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_960_720.jpg'},
            {id: 2, name: 'Vova', img: 'https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_960_720.jpg'},
            {id: 3, name: 'Ilya', img: 'https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_960_720.jpg'},
            {id: 4, name: 'Vlad', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg'},
        ],
        messages: [
            {id: 1, message: 'Hello everyone !'},
            {id: 2, message: 'How are you ?'},
            {id: 3, message: 'Hello !!!'},
        ],
    },
    // sidebar: {}
}







