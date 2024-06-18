import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/favorites/favorites.slice'

const rootActions = {
    ...actions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}
