export interface Video {
    _id: string
    caption: string
    comments: {
        _key: string
        comment: string
        postedBy: {
            _id: string
            image: string
            userName: string
        }
    }[]
    likes: {
        _key: string
        _ref: string
        _type: string
    }[]
    postedBy: {
        _id: string
        image: string
        userName: string
    }
    video: {
        asset: {
            _id: string
            url: string
        }
    }
}