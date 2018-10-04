export default {
    namespace: 'step1',
    state: {
        types: []
    },
    reducers: {
        'selectType'(state, { payload: id }) {
            let curType = state.types.indexOf(id);
            if(curType > -1) {
                state.types.splice(curType, 1);
            }else {
                state.type.push(id);
            }
            return state.types;
        }
    },
    effects: {
        
    }
}