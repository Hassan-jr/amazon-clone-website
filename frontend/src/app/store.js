import { configureStore } from '@reduxjs/toolkit';

import detailedCardReducer from '../features/detailRedux'
import cartreducer from '../features/cart'

export const store = configureStore({
  reducer: {
     card: detailedCardReducer,
     cart: cartreducer,
    
  },
});
