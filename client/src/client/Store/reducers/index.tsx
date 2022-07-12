import { combineReducers } from 'redux';
import { FetchCurrentUserReducer } from './current-user';
import { FetchUsersReducer } from './usersListReducer';
import { FetchAdminsReducer } from './admins';
import { FetchAllAdsReducer } from './get-all-ads';

const rootReducer = combineReducers({
  users: FetchUsersReducer,
  currentUser: FetchCurrentUserReducer,
  admins: FetchAdminsReducer,
  allAds: FetchAllAdsReducer
});

export default rootReducer;
