import { GetterTree } from 'vuex'
import UserState from './UserState'
import RootState from '@/store/RootState'

const getters: GetterTree <UserState, RootState> = {
    isAuthenticated (state) {
        return !!state.token;
    },
    isUserAuthenticated(state) {
        return state.token && state.current
    },
    getUserToken (state) {
        return state.token
    },
    getUserProfile (state) {
        return state.current
    },
    getInstanceUrl (state) {
        return state.instanceUrl;
    },
    getShopifyConfigId (state) {
        return state.shopifyConfig;
    },
    getCurrentEComStore(state) {
        return state.currentEComStore
    },
    getPinnedJobs(state) {
        return state.current ? (state.current as any)['pinnedJobs']?.jobs : []
    }
}
export default getters;