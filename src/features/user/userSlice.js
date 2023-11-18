import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import {toast } from 'react-toastify';


export const registerUser = createAsyncThunk("auth/register", async(userData, thunkAPI)=>{
    try{
        return authService.register(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const loginUser = createAsyncThunk("auth/login", async(userData, thunkAPI)=>{
    try{
        return authService.login(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const getUserProductWishlist = createAsyncThunk("user/wishlist", async(thunkAPI)=>{
    try{
        return authService.getUserWishlist();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const addProdToCart = createAsyncThunk("user/cart/add", async(cartData, thunkAPI)=>{
    try{
        return authService.addToCart(cartData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const getUserCart = createAsyncThunk("user/cart/get", async( thunkAPI)=>{
    try{
        return authService.getCart();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const removeProductFromCart = createAsyncThunk("user/cart/product/delete", async(cartItemId, thunkAPI)=>{
    try{
        return authService.removeProduct(cartItemId);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const updateProductFromCart = createAsyncThunk("user/cart/product/update", async(cartDetail, thunkAPI)=>{
    try{
        return authService.updateProductCart(cartDetail);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

const getCustomerfromLocalStorage = localStorage.getItem('customer')
?JSON.parse(localStorage.getItem('customer')):null

const initialState = {
    user:getCustomerfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: [],
    extraReducers: (builder) => {  
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess =true;
            state.createdUser = action.payload;
            if(state.isSuccess===true){
                toast.info("User registered Successfully");
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
            if(state.isError===true){
                toast.info(action.error);
            }
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false; 
            state.isSuccess =true;
            state.user = action.payload;
            if(state.isSuccess===true){
                localStorage.setItem("token", action.payload.token);
                toast.info("User Logged In Successfully");
            }
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
            if(state.isError===true){
                toast.info(action.error);
            }
        })
        .addCase(getUserProductWishlist.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getUserProductWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess =true;
            state.wishlist = action.payload;
        })
        .addCase(getUserProductWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
        })
        .addCase(addProdToCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addProdToCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false; 
            state.isSuccess =true;
            state.cartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product Added To Cart")
            }
        })
        .addCase(addProdToCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
        })
        .addCase(getUserCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getUserCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false; 
            state.isSuccess =true;
            state.cartProducts = action.payload;
        })
        .addCase(getUserCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
        })
        .addCase(removeProductFromCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(removeProductFromCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false; 
            state.isSuccess =true;
            state.deletedCartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product Deleted from Cart Successfully");
            }
        })
        .addCase(removeProductFromCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
            if(state.isError){
                toast.error("Something Went Wrong");
            }
        })
        .addCase(updateProductFromCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(updateProductFromCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false; 
            state.isSuccess =true;
            state.updatedCartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product Updated from Cart Successfully");
            }
        })
        .addCase(updateProductFromCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess =false;
            state.message = action.error;
            if(state.isError){
                toast.error("Something Went Wrong");
            }
        })
    }
})


export default authSlice.reducer;