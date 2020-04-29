import Axios from 'axios'
export default {
    namespace:'pageBlog',
    state: {

    },
    reducers: {
        getSingleBlog(state,{payload}) {
            console.log(payload)

            return {
                ...payload
            };
        }
    },
    effects: {
        *getPageBlog(action , { put }) {
            let page = action.payload
            let content = yield Axios.get('/api/blog/getblogs/'+page)
            yield put({ type: "getSingleBlog", payload: content.data})
        }
    }
}
