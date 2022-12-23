const initialState = {
  authenticated: false,
  userProfile: {},
}

// Please update the reducer counter in storeHandler when you add new reducer
function reducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case 'setAuthenticated': {
      const { authenticated } = payload
      return {
        ...state,
        authenticated,
      }
    }
    case 'setUserProfile': {
      const { profile } = payload
      return {
        ...state,
        profile,
        authenticated: true,
      }
    }
    case 'updateBalance': {
      const { value } = payload
      const newProfile = {
        ...state.userProfile,
      }
      newProfile.profile.point = value
      return {
        ...state,
        profile: newProfile,
      }
    }
    default:
      return state
  }
}

export default {
  name: 'user',
  initialState,
  reducer,
}
